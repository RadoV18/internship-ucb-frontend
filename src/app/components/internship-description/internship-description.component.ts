import {Component, EventEmitter, Input} from '@angular/core';
import {InternshipDto} from "../../dto/internship.dto";

@Component({
  selector: 'app-internship-description',
  templateUrl: './internship-description.component.html',
  styleUrls: ['./internship-description.component.css']
})
export class InternshipDescriptionComponent {
  @Input() internship: InternshipDto;
}
