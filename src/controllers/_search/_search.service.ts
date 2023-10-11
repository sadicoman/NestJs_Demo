import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {

    async getOneDishByName(nameDish : string) : Promise<any> {
        return await { message : "this dish tish"}
    }

    async getOneDishById(id : number) : Promise<any> {
        return await { message : "this dish tish"}
    }

}
