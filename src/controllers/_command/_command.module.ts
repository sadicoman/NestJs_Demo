import { Module } from '@nestjs/common';
import { CommandController } from './_command.controller';
import { CommandService } from './_command.service';

@Module({
  controllers: [CommandController],
  providers: [CommandService]
})
export class CommandModule {}
