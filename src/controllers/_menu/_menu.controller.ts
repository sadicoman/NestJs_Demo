// import { Controller, Get, Param, Query } from '@nestjs/common';
// import { MenuService } from './_menu.service';

// // COUCHE ROUTAGE + CONTROLLERS (ne fait que lister les routers et appel le service (businiess + db))
// @Controller('menu')
// export class MenuController {
//   constructor(private readonly menuService: MenuService) {}

//   //localhost:3000/menu
//   //localhost:3000/menu?pageName=pizzas
//   //localhost:3000/menu?pageName=pizzas&type=carnos
//   @Get()
//   getAllMenu(
//     @Query('pageName') pageName: string,
//     @Query('type') type: string,
//     @Query() queryParams: any,
//   ): Promise<any[]> {
//     console.log(queryParams);
//     try {
//       return this.menuService.getAllMenu(pageName, type);
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   }

//   //localhost:3000/menu/:id
//   @Get(':id')
//   getOneDish(@Param('id') id: number): Promise<any> {
//     try {
//       return this.menuService.getOneDish(id);
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   }
// }

import {
  Controller,
  Get,
  Param,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DbService } from '../../services/db/db.service';
import * as mssql from 'mssql';

@Controller('menu')
export class MenuController {
  constructor(private readonly dbService: DbService) {}

  @Get()
  async index() {
    try {
      const db = this.dbService.connection;
      const result = await db.request().query('SELECT * FROM Plats');
      const plats = result.recordset.map((row) => ({
        id: row['ID'],
        nom: row['Nom'],
        image: row['Image'],
        description: row['Description'],
        breveDescription: row['BreveDescription'],
        prix: row['Prix'],
        allergenes: row['Allergenes'],
      }));
      return { page: 'pages/menu/index', plats: plats };
    } catch (error) {
      console.error('An error occurred:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  @Get(':id')
  async details(@Param('id') id: string) {
    try {
      const db = this.dbService.connection;
      const result = await db
        .request()
        .input('id', mssql.Int, id)
        .query('SELECT * FROM Plats WHERE ID = @id');
      if (result.recordset.length === 0) {
        console.log("Aucun plat trouvé pour l'ID donné");
        throw new NotFoundException('Plat non trouvé');
      }
      const plat = result.recordset[0];
      return { page: 'pages/menu/details', plat: plat };
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }
}
