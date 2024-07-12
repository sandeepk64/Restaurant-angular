import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(allRecipe:any[],sortKey:string): any[] {
    const result:any=[]

    if (!allRecipe || sortKey=="") {
      return allRecipe
    } else {
      allRecipe.forEach((item:any)=>{
        if (item['mealType'].includes(sortKey)) {
          result.push(item)
        }
      })
    }
    return result;
  }

}