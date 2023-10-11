import { Injectable } from '@nestjs/common';

//COUCHE BUSINESS ! CONTACT ET UTILISE LA COUCHE MODEL (DB)
@Injectable()
export class MenuService {
  async getAllMenu(pageName: string, type: string): Promise<any[]> {
    if (pageName == null) console.log('Tout le menu');
    else console.log('Page du menu voulue : ' + pageName);

    if (type == null) console.log('Pour tous le monde');
    else console.log('Type de préférence du menu voulue : ' + type);

    return await [
      { message: ' bonus' },
      { message: ' bonus 2' },
      { message: ' bonus 3' },
      { message: ' bonus 4 ' },
    ];
  }

  async getOneDish(id: number): Promise<any> {
    return await { message: 'bonus' };
  }
}
