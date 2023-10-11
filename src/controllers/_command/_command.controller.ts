import { Body, Controller, Post } from '@nestjs/common';
import { CommandService } from './_command.service';

@Controller('command')
export class CommandController {
  constructor(private readonly commandService: CommandService) {}

  @Post()
  addCommand(@Body() list: Array<string>): Promise<any> {
    try {
      return this.commandService.addCommand(list);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
