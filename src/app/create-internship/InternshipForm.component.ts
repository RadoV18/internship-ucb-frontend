import { Component } from '@angular/core';
import { InternshipService } from '../services/internship.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from '../models/role';
import { Requirement } from '../models/requirement';
import { Benefit } from '../models/benefit';
import { Major } from '../models/major';
import { City } from '../models/city';

@Component({
  selector: 'app-internship-form',
  templateUrl: './InternshipForm.component.html',
  styleUrls: ['./InternshipForm.component.css'],
})
export class InternshipFormComponent {
  constructor(private internshipService: InternshipService) {}
  roleList: Role[] = [];
  requirementList: Requirement[] = [];
  benefitList: Benefit[] = [];
  majorList: Major[] = [];
  majors: Major[] = [
    new Major(1, 'Computer Science'),
    new Major(2, 'Information Technology'),
    new Major(3, 'Software Engineering'),
  ];
  cities: City[] = [
    { cityId: 1, name: 'New York' },
    { cityId: 2, name: 'Rome' },
    { cityId: 3, name: 'London' },
    { cityId: 4, name: 'Istanbul' },
  ];
  newRole = '';
  newRequirement = '';
  newBenefit = '';
  internshipForm = new FormGroup({
    title: new FormControl('', [
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z1-9 ]*'),
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.maxLength(500),
      Validators.pattern('[a-zA-Z1-9 ]*'),
      Validators.required,
    ]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    major: new FormControl<Major | null>(null, []),
    role: new FormControl('', [Validators.pattern('[a-zA-Z1-9 :]*')]),
    requirement: new FormControl('', [Validators.pattern('[a-zA-Z1-9 :]*')]),
    benefit: new FormControl('', [Validators.pattern('[a-zA-Z1-9 :]*')]),
    city: new FormControl<City | null>(null, [Validators.required]),
  });
  addMajor() {
    const major = this.internshipForm.get('major')?.value;

    if (major) {
      const isMajorListed =
        this.majorList.filter((m) => m.majorId === major.majorId).length > 0;
      if (!isMajorListed) {
        this.majorList = [...this.majorList, major];
        this.internshipForm.get('major')?.reset();
      } else {
        alert('Major already added');
        this.internshipForm.get('major')?.reset();
      }
    } else {
      alert('Please Select a major');
    }
  }
  addRole() {
    const role = this.internshipForm.get('role')?.value;
    if (role) {
      this.roleList = [
        ...this.roleList,
        { id: this.roleList.length + 1, description: role },
      ];
      this.internshipForm.get('role')?.reset();
    } else {
      alert('Please enter role');
    }
  }
  addBenefit() {
    const benefit = this.internshipForm.get('benefit')?.value;
    if (benefit) {
      this.benefitList = [
        ...this.benefitList,
        { id: this.benefitList.length + 1, description: benefit },
      ];
      this.internshipForm.get('benefit')?.reset();
    } else {
      alert('Please enter benefit');
    }
  }
  addRequirement() {
    const requirement = this.internshipForm.get('requirement')?.value;
    if (requirement) {
      this.requirementList = [
        ...this.requirementList,
        { id: this.requirementList.length + 1, description: requirement },
      ];
      this.internshipForm.get('requirement')?.reset();
    } else {
      alert('Please enter requirement');
    }
  }

  deleteRole(index: number) {
    this.roleList.splice(index, 1);
  }
  deleteRequirement(index: number) {
    this.requirementList.splice(index, 1);
  }
  deleteBenefit(index: number) {
    this.benefitList.splice(index, 1);
  }
  deleteMajor(index: number) {
    this.majorList.splice(index, 1);
  }

  onSubmit() {
    if (this.roleList.length === 0) {
      alert('Please add at least one role');
      return;
    }
    if (this.requirementList.length === 0) {
      alert('Please add at least one requirement');
      return;
    }
    if (this.benefitList.length === 0) {
      alert('Please add at least one benefit');
      return;
    }
    if (this.majorList.length === 0) {
      alert('Please add at least one major');
      return;
    }
    const city = this.internshipForm.get('city')?.value;
    if (!city) {
      alert('Please select a city');
      return;
    }
    const internship = {
      title: this.internshipForm.get('title')?.value,
      description: this.internshipForm.get('description')?.value,
      startingDate: this.internshipForm.get('startDate')?.value,
      endingDate: this.internshipForm.get('endDate')?.value,
      majorList: this.majorList,
      internshipRoles: this.roleList,
      internshipRequirements: this.requirementList,
      internshipBenefits: this.benefitList,
      institutionId: 1,
      cityId: city.cityId,
    };
    console.table(internship);
    this.internshipService.saveInternship(internship).subscribe({
      next: (res) => {
        alert('Internship created successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
