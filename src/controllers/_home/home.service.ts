import { Injectable } from '@nestjs/common';
import { DbService } from '../../services/db/db.service';

@Injectable()
export class HomeService {
  constructor(private readonly dbService: DbService) {}

  async getHomePageData(): Promise<any> {
    const connection = this.dbService.connection;
    const request = connection.request();
    const result = await request.query('SELECT TOP 1 * FROM Accueil');
    return result.recordset[0];
  }
}
