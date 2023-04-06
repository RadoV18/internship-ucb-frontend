// validator that checks if the number of words in the input is less than or equal to the specified number
import {AbstractControl, ValidatorFn} from "@angular/forms";

export function wordCountValidator(max: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value.split(' ').length > max;
    console.log(control.value.split(' ').length);
    return forbidden ? {'wordCount': {value: control.value}} : null;
  };
}
