import {
  FormGroup,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

export function dateValidator(control: AbstractControl): ValidatorFn | null {
  const startingDate = control.get('startDate');
  const endingDate = control.get('endDate');
  const start = new Date(startingDate?.value);
  const end = new Date(endingDate?.value);
  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1));
  console.table({
    start: start,
    end: end,
    today: today,
    tomorrow: tomorrow,
  });
  console.log(
    startingDate &&
      endingDate &&
      start.getTime() > end.getTime() &&
      start.getTime() >= today.getTime() &&
      end.getTime() >= tomorrow.getTime()
  );
  return (control: AbstractControl): ValidationErrors | null => {
    return startingDate &&
      endingDate &&
      start.getTime() > end.getTime() &&
      start.getTime() >= today.getTime() &&
      end.getTime() >= tomorrow.getTime()
      ? { validDate: false }
      : null;
  };
}
