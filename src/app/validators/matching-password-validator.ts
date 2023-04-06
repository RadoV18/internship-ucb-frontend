// validator that checks if two passwords match

import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export function matchingPasswordValidator(control: FormGroup): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? { 'matchingPassword': true } : null;
}
