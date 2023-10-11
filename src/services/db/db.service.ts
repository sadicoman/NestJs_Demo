import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mssql from 'mssql';

@Injectable()
export class DbService implements OnModuleInit {
  private sqlConfig: mssql.config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_SERVER,
    options: {
      trustServerCertificate: true,
    },
  };

  private db: mssql.ConnectionPool;

  async onModuleInit(): Promise<void> {
    this.db = await mssql.connect(this.sqlConfig);
    await this.testDbConnection();
  }

  private async testDbConnection(): Promise<void> {
    try {
      if (this.db.connected) {
        console.log('Connection DB - OK');
      } else {
        console.log('Connection DB - Error');
      }
    } catch (error) {
      console.log('Connection DB - Error');
      console.error(error);
    }
  }

  get connection(): mssql.ConnectionPool {
    return this.db;
  }
}
