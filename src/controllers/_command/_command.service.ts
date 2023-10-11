import { Injectable } from '@nestjs/common';

@Injectable()
export class CommandService {
  async addCommand(list: string[]) {
    console.log(list);
    return await { message: 'Nous avons bien recu votre commande, merci XoXo' };
  }
}
