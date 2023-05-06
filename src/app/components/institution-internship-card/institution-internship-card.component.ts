import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-institution-internship-card',
  templateUrl: './institution-internship-card.component.html',
  styleUrls: ['./institution-internship-card.component.css']
})
export class InstitutionInternshipCardComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() dateFrom: Date;
  @Input() dateTo: Date;
  @Input() city: string;
  @Input() count: number;
  @Input() pictures: Array<string>

  constructor(private router: Router) {
  }

  openDetails() {
    this.router.navigateByUrl(`/institucion/convocatorias/${this.id}`, {
      state: {
        title: this.title,
      }
    });
  }
}
