import { Component } from '@angular/core';
import { InternshipListDto } from 'src/app/dto/internship.list.dto';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
  show: boolean = false;
  topInternships: InternshipListDto[] = [];
  searchedInternships: InternshipListDto[] = [];
  constructor(private internshipService: InternshipService) { }
  ngOnInit(): void {
    this.getLastInternships();
  }
  onChange(event: any){
    if(event.target.value !== ''){
      this.getInternshipByTitle(event.target.value);
    }
    if(event.target.value === ''){
      this.searchedInternships = [];
    }
  }
  getLastInternships(){
    this.internshipService.getLastInternships().subscribe({
      next: (response) => {
        this.topInternships = response.data; 
        console.log(response);
      }
    }) 
  }
  getInternshipByTitle(title: string){
    if(title !== ''){
      this.internshipService.getInternshipByTitle(title).subscribe({
        next: (response) => {
          this.searchedInternships = response.data; 
          console.log(response);
        }
      })
    }else{
      this.searchedInternships = [];
    }
  }
  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }
}
