import { Component, OnInit , Input} from '@angular/core';
import { Graduate } from 'src/app/dto/graduate';
import { InstitutionDto } from 'src/app/dto/institution.dto';
import { InstitutionService } from "../../services/institution.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-home-admin-institution',
  templateUrl: './home-admin-institution.component.html',
  styleUrls: ['./home-admin-institution.component.css']
})
export class HomeAdminInstitutionComponent implements OnInit{
  show: boolean = false;
  listInstitutions: Array<InstitutionDto>;
  @Input() title: String = "Detalle Institucion";
  @Input() showModal:boolean = false;
  @Input() institutionView: InstitutionDto;

  constructor(private institutionService: InstitutionService, private userService: UserService){}

  ngOnInit(): void {
    this.institutionService.getInstitutions().subscribe(response =>{
      this.listInstitutions = response
      console.log(this.listInstitutions);
    })
  }

  viewModal(institution:InstitutionDto){
    this.showModal = true;
    this.institutionView = institution;
    console.log(this.institutionView);
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  approveRequest(institution: InstitutionDto){
    this.userService.setApprovalState(institution.user.userId, 1).subscribe();
    this.showModal = false;
  }

  rejectRequest(institution: InstitutionDto){
    this.userService.setApprovalState(institution.user.userId, 2).subscribe();
    this.showModal = false;
  }
}
