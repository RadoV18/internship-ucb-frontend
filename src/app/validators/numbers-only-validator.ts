// validator that checks if the value only has numbers
import {AbstractControl, ValidatorFn} from "@angular/forms";

export function numbersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = !/^\d+$/.test(control.value);
    return forbidden ? {'numbersOnly': {value: control.value}} : null;
  };
}
