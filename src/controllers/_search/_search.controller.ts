import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchService } from './_search.service';

@Controller('search')
export class SearchController {

    constructor(private readonly searchService : SearchService){}

  //localhost:3000/search/name/:nameDish
  @Get("name/:nameDish")
  searchByDish(
    @Param("nameDish") nameDish : string
  ) : Promise<any>
  {
    console.log(nameDish)
    try{
      return this.searchService.getOneDishByName(nameDish)
    }
    catch(error){
        console.log(error)
        return error
    }
  }


  //localhost:3000/search/id/:id
  @Get("id/:id")
  searchByDishId(
    @Param("id") id : number
  ) : Promise<any>
  {
    console.log(id)
    try{
      return this.searchService.getOneDishById(id)
    }
    catch(error){
        console.log(error)
        return error
    }
  }

}
