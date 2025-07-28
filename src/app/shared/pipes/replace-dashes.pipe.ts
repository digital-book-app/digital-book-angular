import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDashes'
})
export class ReplaceDashesPipe implements PipeTransform {

  transform(value: string | undefined, replacement = ' '): string {
    return value ? value.replace(/-/g, replacement) : '';
  }

}
