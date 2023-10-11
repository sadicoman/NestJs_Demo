import { Module } from '@nestjs/common';
import { MenuController } from './_menu.controller';
import { DbModule } from '../../services/db/db.module'; // Assurez-vous que cette importation est correcte

@Module({
  imports: [DbModule], // Importez DbModule ici
  controllers: [MenuController],
})
export class MenuModule {}
