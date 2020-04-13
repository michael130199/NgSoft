import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

@Injectable()

export class SearchPipe implements PipeTransform {

    transform(items: any, term: any): any {

        if(term === undefined) {
            return items;
        }

        return items.filter(function (item) {
            let a = item.name.toLowerCase().includes(term.toLowerCase());
            let b = item.nickname.toLowerCase().includes(term.toLowerCase());
            
            if(a){
                return a;
            } else {
                return b;
            }

        });

    }

}
