import {
  FormGroup,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
export function minDateValidator(date: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const auxControlDate = new Date(control.value);
    const controlDate = new Date(auxControlDate.getTime() + 4 * 60 * 60 * 1000);
    const auxDate = new Date(date);
    date = new Date(
      `${auxDate.getFullYear()}-${auxDate.getMonth() + 1}-${auxDate.getDate()}`
    );
    const validDate = controlDate.getTime() < date.getTime();
    return validDate ? { invalidDate: true } : null;
  };
}

export function dateValidator(control: AbstractControl): ValidatorFn | null {
  const startingDate = control.get('startDate');
  const endingDate = control.get('endDate');
  const start = new Date(startingDate?.value);
  const end = new Date(endingDate?.value);
  const startDate = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const endDate = new Date(end.getTime() + 4 * 60 * 60 * 1000);
  return (control: AbstractControl): ValidationErrors | null => {
    return start.getTime() <= end.getTime() ? { validDate: true } : null;
  };
}
