import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { InstitutionService } from 'src/app/services/institution.service';


@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' }
  // ]; 
  // columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  instituciones: Array<any> = [];
  columns1 = [{ prop: 'area', name: 'nombre'}, { prop: 'area', name: 'Apellidos'}, { prop: 'area', name: 'Correo'}];

  columns2 = [{ prop: 'Nombres'}, { prop: 'Apellidos' }, { prop: 'Correo' }];

  // rows1 = [
  //   { Nombres: 'Larry', Apellidos: 'apellido' , Correo: "email1@ucb.edu.bo"},
  //   { Nombres: 'Lauren', Apellidos: 'apellido', Correo: "email2@ucb.edu.bo"}
  // ];
  rows1: Array<any> = [];

  rows2 = [
    { Nombres: 'Larry', Apellidos: 'apellido' , Correo: "email1@ucb.edu.bo"},
    { Nombres: 'Lauren', Apellidos: 'apellido', Correo: "email2@ucb.edu.bo"}
  ];

  ColumnMode = ColumnMode;
  institutions: Array<any> = [];
  constructor(private institution:InstitutionService){
    this.institution.getDataAPI().subscribe((resp: any) =>{
      // console.log(resp[0]['user_ucb_id']);
      this.instituciones.push(resp);
    })
    console.log(this.instituciones);
    this.rows1 = this.instituciones;
  }
}
