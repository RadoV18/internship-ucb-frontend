import { Component, Input, OnInit } from '@angular/core';
import { InternshipDto } from 'src/app/dto/internship.dto';
import { ResponseDto } from 'src/app/dto/response.dto';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-requested-internships',
  templateUrl: './requested-internships.component.html',
  styleUrls: ['./requested-internships.component.css']
})
export class RequestedInternshipsComponent implements OnInit{
  constructor(private internshipService: InternshipService){}
  requestedInternship : InternshipDto[] = [];
  show: boolean = false;
  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  ngOnInit() {
    const institutionId = Number(localStorage.getItem('id') || '0');
    this.getRequestedInternships(institutionId,0);

  }
  getRequestedInternships(institutionId:number, status:number) {
    return this.internshipService.getRequestedInternships(institutionId,status).subscribe(
      {
        next: (response:ResponseDto<InternshipDto[]>) => {
          this.requestedInternship = response.data;
          console.log(this.requestedInternship)
        }
      }
    );
  }
}
