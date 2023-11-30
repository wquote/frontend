import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

}
