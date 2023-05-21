import { Component, Input, OnInit } from '@angular/core';
import { Internship } from 'src/app/dto/internship';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-admin-convocations',
  templateUrl: './admin-convocations.component.html',
  styleUrls: ['./admin-convocations.component.css']
})
export class AdminConvocationsComponent implements OnInit{
  show: boolean = false;
  @Input() showModal:boolean = false;
  @Input() title: String;
  listInternship: Array<Internship>
  internshipView: Internship;
  listBenefits:Array<String>;
  listRequeriments: Array<String>;
  listRoles: Array<String>;
  majorlist: Array<String>;

  constructor(private serviceAdmin:InternshipService){}

  ngOnInit(): void {
    this.serviceAdmin.getPendingInternships().subscribe(response =>{
      this.listInternship = response.data;
    })
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  setInternshipView(internship: Internship){
    this.title = internship.title;
    this.internshipView = internship;
    this.listRequeriments = internship.internshipRequirements;
    this.listRoles = internship.internshipRoles;
    this.majorlist = internship.majorList;
    this.listBenefits = internship.internshipBenefits;
    console.log(internship)
    this.showModal = true;
  }
  approveRequest(internship:Internship){
    this.serviceAdmin.putInternshipState(internship.internshipId, 1).subscribe()
    this.showModal = false;
    this.listInternship = this.listInternship.filter(item => item.internshipId !== internship.internshipId);
  }

  rejectRequest(internship:Internship){
    this.serviceAdmin.putInternshipState(internship.internshipId, 2).subscribe()
    this.showModal = false;
    this.listInternship = this.listInternship.filter(item => item.internshipId !== internship.internshipId);
  }
}
