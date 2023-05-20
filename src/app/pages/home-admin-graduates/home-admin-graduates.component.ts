import { Component, Input, OnInit } from '@angular/core';
import { Graduate } from 'src/app/dto/graduate';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home-admin-graduates',
  templateUrl: './home-admin-graduates.component.html',
  styleUrls: ['./home-admin-graduates.component.css']
})
export class HomeAdminGraduatesComponent implements OnInit{
  show: boolean = false;
  listGraduates: Array<Graduate>
  @Input() showModalGraduate: boolean = false;
  @Input() titleGraduate: String = "Detalle Graduado";
  @Input() graduateView: Graduate;

  constructor(private serviceAdmin:AdminService){}

  ngOnInit(): void {
    this.serviceAdmin.getGraduates().subscribe(graduate =>{
      // console.log(graduate);
      this.listGraduates = graduate;
    })
    
  }

  viewModalGraduate(graduate:Graduate){
    this.showModalGraduate = true;
    console.log(graduate);
    this.graduateView = graduate;
  }
  
  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  aprobar(graduates: Graduate){
    console.log(graduates);
    this.serviceAdmin.setEstadoSolicitud(graduates.person.user.userId).subscribe();
    console.log(graduates.person.user.userId);
    this.showModalGraduate = false;
  }

  rechazar(){
    this.showModalGraduate = false;
  }
}
