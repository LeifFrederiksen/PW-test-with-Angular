import { Pipe, PipeTransform } from '@angular/core';
import { IDocument } from './document';

@Pipe({ name: 'documentStringFieldFilter'})
export class DocumentStringFieldFilterPipe implements PipeTransform {
    transform(value: IDocument[], filterField: string, filterBy: string): IDocument[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter(
                    function(document) {
                            return document[filterField].toLocaleLowerCase().indexOf(filterBy) !== -1
                    }) 
                : value;
  }
}