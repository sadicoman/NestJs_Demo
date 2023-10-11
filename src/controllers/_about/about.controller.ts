import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { DbService } from '../../services/db/db.service';

@Controller('about')
export class AboutController {
  constructor(private readonly dbService: DbService) {}

  @Get()
  async index() {
    try {
      const db = this.dbService.connection;
      const result = await db
        .request()
        .query('SELECT * FROM Accueil WHERE ID = 1');

      // Vérification pour voir si des données ont été trouvées
      if (result.recordset.length === 0) {
        console.log("Aucune donnée trouvée pour l'ID donné");
        throw new NotFoundException('Données non trouvées');
      }

      const accueilData = result.recordset[0];

      // Convertir les données en format JSON et renvoyer
      return {
        page: 'pages/about/index',
        accueilData: accueilData,
      };
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }
}
