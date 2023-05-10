import { Component, Input, OnInit } from '@angular/core';
import { InternshipListDto } from 'src/app/dto/internship.list.dto';

@Component({
  selector: 'app-internship-card',
  templateUrl: './internship-card.component.html',
  styleUrls: ['./internship-card.component.css'],
})
export class InternshipCardComponent {
  @Input() internship: InternshipListDto;
}
