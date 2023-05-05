import { Component, OnInit , Input} from '@angular/core';
import { Graduate } from 'src/app/dto/graduate';
import { InstitutionDto } from 'src/app/dto/institution.dto';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home-admin-institution',
  templateUrl: './home-admin-institution.component.html',
  styleUrls: ['./home-admin-institution.component.css']
})
export class HomeAdminInstitutionComponent implements OnInit{
  show: boolean = false;
  listInstitutions: Array<InstitutionDto>;
  listGraduates: Array<Graduate>
  @Input() title: String = "Detalle Institucion";
  @Input() showModal:boolean = false;
  @Input() intitutionView: InstitutionDto;

  constructor(private serviceAdmin:AdminService){}

  ngOnInit(): void {
    this.serviceAdmin.getInstitutions().subscribe(response =>{
      this.listInstitutions = response
    })
  }

  viewModal(institution:InstitutionDto){
    this.showModal = true;
    this.intitutionView = institution;
    console.log(this.intitutionView);
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  aprobar(institucion: InstitutionDto){
    console.log(institucion);
    this.serviceAdmin.setEstadoSolicitud(institucion.userUcb.userId).subscribe();
    console.log(institucion.userUcb.userId);
    this.showModal = false;
  }

  rechazar(){
    this.showModal = false;
  }
}
