import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {InstitutionDto} from "../../dto/institution.dto";

interface InstitutionTableData {
  id: number;
  name: string;
  email: string;
  area: string;
  contactName: string;
}

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {

  institutions : Array<InstitutionTableData> = [];
  graduates = [];
  constructor(private adminService : AdminService){  }

  ngOnInit() {
    this.adminService.getNewInstitutions().subscribe({
      next: (data: Array<InstitutionDto>) => {
        this.institutions = data.map((institution: InstitutionDto) => {
          return {
            id: institution.institutionId,
            name: institution.name,
            email: institution.contactEmail,
            area: institution.area,
            contactName: institution.contactFirstName + ' ' + institution.contactLastName
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });

  }
}
