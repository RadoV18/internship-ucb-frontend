import { Component, Input, OnInit } from '@angular/core';
import { Graduate } from 'src/app/dto/graduate';
import { GraduateService } from "../../services/graduate.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-home-admin-graduates',
  templateUrl: './home-admin-graduates.component.html',
  styleUrls: ['./home-admin-graduates.component.css']
})
export class HomeAdminGraduatesComponent implements OnInit{
  show: boolean = false;
  listGraduates: Array<Graduate>
  @Input() showModalGraduate: boolean = false;
  @Input() titleGraduate: String = "Detalles del Estudiante";
  @Input() graduateView: Graduate;

  constructor(private graduateService: GraduateService, private userService: UserService){}

  ngOnInit(): void {
    this.graduateService.getGraduates().subscribe(graduate =>{
      this.listGraduates = graduate;
    })
  }

  viewModalGraduate(graduate:Graduate){
    this.showModalGraduate = true;
    this.graduateView = graduate;
  }
  
  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  approveRequest(graduate: Graduate){
    this.userService.setApprovalState(graduate.person.user.userId, 1).subscribe();
    this.showModalGraduate = false;
  }

  rejectRequest(graduate: Graduate){
    this.userService.setApprovalState(graduate.person.user.userId, 2).subscribe();
    this.showModalGraduate = false;
  }
}
