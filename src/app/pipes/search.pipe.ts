import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipe:any[],searchKey:string): any[] {
    const result:any =[]

    if(!allRecipe || searchKey==""){
      return allRecipe
    }else{
      allRecipe.forEach((item:any)=>{
        if (item['cuisine'].toLowerCase().includes(searchKey.toLowerCase()) || item['name'].toLowerCase().includes(searchKey.toLowerCase())) {
          result.push(item)
        }
      })
    }

    return result;
  }

}
