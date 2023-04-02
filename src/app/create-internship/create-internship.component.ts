import { Component } from '@angular/core';

@Component({
  selector: 'app-create-internship',
  templateUrl: './create-internship.component.html',
  styleUrls: ['./create-internship.component.css'],
})
export class CreateInternshipComponent {
  roleList = ['role 1', 'role 2', 'role 3'];
  requirementList = ['requirement 1', 'requirement 2', 'requirement 3'];
  benefitList = ['benefit 1', 'benefit 2', 'benefit 3'];
  majorList = [
    { id: 1, name: 'major 1' },
    { id: 2, name: 'major 2' },
    { id: 3, name: 'major 3' },
  ];
  newRole = '';
  newRequirement = '';
  newBenefit = '';

  addRole() {
    this.roleList.push(this.newRole);
    this.newRole = '';
  }
  addBenefit() {
    this.benefitList.push(this.newBenefit);
    this.newBenefit = '';
  }
  addRequirement() {
    this.requirementList.push(this.newRequirement);
    this.newRequirement = '';
  }

  deleteRole(index: number) {
    this.roleList.splice(index, 1);
  }
}
