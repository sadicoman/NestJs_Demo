import { Injectable } from '@nestjs/common';

//COUCHE BUSINESS ! CONTACT ET UTILISE LA COUCHE MODEL (DB)
@Injectable()
export class MenuService {
  async getAllMenu(): Promise<any[]> {
    return await [
      { message: ' bonus' },
      { message: ' bonus 2' },
      { message: ' bonus 3' },
      { message: ' bonus 4 ' },
    ];
  }

  async getOneDish(): Promise<any> {
    return await { message: ' bonus' };
  }
}
