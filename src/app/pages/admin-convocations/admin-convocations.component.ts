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
  internshipNew: Internship;
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

  ConvocatoriaModal(internship:Internship){
    this.title = internship.title;
    this.internshipNew = internship;
    this.listRequeriments = internship.internshipRequirements;
    this.listRoles = internship.internshipRoles;
    this.majorlist = internship.majorList;
    this.listBenefits = internship.internshipBenefits;
    console.log(internship)
    this.showModal = true;
  }
  aprobar(internship:Internship){
    console.log("aprueba");
    this.serviceAdmin.putInternshipState(1,internship.internshipId).subscribe()
    this.showModal = false;
    window.location.reload();
  }

  rechazar(internship:Internship){
    console.log("rechaza")
    this.serviceAdmin.putInternshipState(2,internship.internshipId).subscribe()
    this.showModal = false;
    window.location.reload();
  }
}
