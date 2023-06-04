import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {InstitutionDto} from "../../dto/institution.dto";
import {InternshipService} from "../../services/internship.service";
import {ActiveInternshipDto} from "../../dto/active.internship.dto";
import {ResponseDto} from "../../dto/response.dto";

@Component({
  selector: 'app-active-internships-page',
  templateUrl: './active-internships-page.component.html',
  styleUrls: ['./active-internships-page.component.css']
})
export class ActiveInternshipsPageComponent {
  show: boolean = false;
  activeInternships: Array<ActiveInternshipDto> = [];

  constructor(private internshipService: InternshipService) {
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  ngOnInit() {
    const institutionId = Number(localStorage.getItem('id') || '0');
    this.internshipService.getActiveInternshipsByInstitutionId(institutionId).subscribe({
      next: (response: ResponseDto<Array<ActiveInternshipDto>>) => {
        this.activeInternships = response.data
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
