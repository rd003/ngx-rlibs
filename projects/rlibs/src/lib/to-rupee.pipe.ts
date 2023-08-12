import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRupee',
})
export class ToRupeePipe implements PipeTransform {
  transform(value: number): string {
    // Ensure value is a number
    if (isNaN(value)) {
      return '';
    }

    // Format the number as currency with Indian Rupee symbol
    const formattedValue = '₹' + value.toFixed(2); // Display with 2 decimal places
    return formattedValue;
  }
}
