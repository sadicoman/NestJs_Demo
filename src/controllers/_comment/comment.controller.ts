import {
  Controller,
  Get,
  Post,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
import { DbService } from '../../services/db/db.service';
import * as mssql from 'mssql';

@Controller('comment')
export class CommentController {
  constructor(private readonly dbService: DbService) {}

  @Get()
  async index() {
    try {
      const db = this.dbService.connection;
      const result = await db.request().query('SELECT * FROM Commentaires');
      const commentaires = result.recordset.map((row) => ({
        prenom: row['Prenom'],
        nom: row['Nom'],
        note: row['Note'],
        email: row['Email'],
        message: row['Message'],
      }));
      return { page: 'pages/comment/index', commentaires: commentaires };
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires:', error);
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des commentaires',
      );
    }
  }

  @Get('add')
  addGET() {
    return { page: 'pages/comment/add' };
  }

  @Post('add')
  async addPOST(@Body() body: any) {
    const { prenom, nom, note, email, message } = body;
    try {
      const db = this.dbService.connection;
      const request = new mssql.Request(db);
      request.input('Prenom', mssql.NVarChar, prenom);
      request.input('Nom', mssql.NVarChar, nom);
      request.input('Note', mssql.Int, parseInt(note));
      request.input('Email', mssql.NVarChar, email);
      request.input('Message', mssql.NVarChar, message);
      await request.query(
        'INSERT INTO Commentaires (Prenom, Nom, Note, Email, Message) VALUES (@Prenom, @Nom, @Note, @Email, @Message)',
      );
      return { message: 'Commentaire ajouté avec succès' };
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire", error);
      throw new InternalServerErrorException(
        "Erreur lors de l'ajout du commentaire",
      );
    }
  }
}
