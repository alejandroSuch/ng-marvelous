import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: string, defaultValue: string = '???'): string {
    const val = +value;

    if(isNaN(val)) {
      return defaultValue;
    }

    return this.abbrNum(val, 1);
  }

  /**
   * Source: https://stackoverflow.com/a/2686098/797661
   */
  private abbrNum(number: number, _decPlaces: number): string {
    // 2 decimal places => 100, 3 => 1000, etc
    const decPlaces = Math.pow(10, _decPlaces);

    // Enumerate number abbreviations
    const abbrev = [ "k", "M", "G", "T", "P", "E" ];

    // Go through the array backwards, so we do the largest first
    for (let i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        const size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            return `${(Math.round(number * decPlaces / size) / decPlaces)}${abbrev[i]}`;
        }
    }

    return `${number}`;
  }
}
