import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CityDto } from 'src/app/dto/city.dto';
import { InternshipListDto } from 'src/app/dto/internship.list.dto';
import { MajorDto } from 'src/app/dto/major.dto';
import { CityService } from 'src/app/services/city.service';
import { InternshipService } from 'src/app/services/internship.service';
import { MajorService } from 'src/app/services/major.service';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.css'],
})
export class InternshipListComponent implements OnInit {
  internshipList: InternshipListDto[] = [];
  selectedMajorList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  majorList: MajorDto[] = [];
  cityList: CityDto[] = [];
  city: string = '';
  startingDate: Date = new Date('2019-5-12');
  endingDate: Date = new Date('2025-1-1');
  page: number = 0;
  totalPages: number = 0;
  pageList: number[] = [];

  constructor(
    private internshipService: InternshipService,
    private majorService: MajorService,
    private cityServices: CityService
  ) {}

  ngOnInit(): void {
    this.getInternshipList(
      this.selectedMajorList,
      this.city,
      this.startingDate,
      this.endingDate,
      this.page
    );
    this.getCities();
    this.getMajors();
  }

  filtersForm: FormGroup = new FormGroup({
    major: new FormControl<MajorDto | null>(null, []),
    city: new FormControl<string | null>(null, []),
    startingDate: new FormControl<Date | null>(null, []),
    endingDate: new FormControl<Date | null>(null, []),
  });
  getMajors() {
    this.majorService.getMajors().subscribe((data) => {
      this.majorList = data;
    });
  }
  getCities() {
    this.cityServices.getCities().subscribe((data) => {
      this.cityList = data;
    });
  }
  getInternshipList(
    majors: number[],
    city: string,
    startingDate: Date,
    endingDate: Date,
    page: number
  ) {
    this.internshipService
      .getFilteredInternships(majors, city, startingDate, endingDate, page)
      .subscribe((data) => {
        this.internshipList = data.data.content;
        this.totalPages = data.data.totalPages;
        this.pageList = this.numberToArray(this.totalPages);
        console.log(data);
      });
  }
  onSubmitFilters() {
    this.page = 0;
    this.selectedMajorList = [
      this.filtersForm.get('major')?.value?.majorId
        ? this.filtersForm.get('major')?.value?.majorId
        : this.selectedMajorList,
    ];
    this.city = this.filtersForm.get('city')?.value?.name
      ? this.filtersForm.get('city')?.value?.name
      : this.city;
    this.startingDate = this.filtersForm.get('startingDate')?.value
      ? this.filtersForm.get('startingDate')?.value
      : this.startingDate;
    this.endingDate = this.filtersForm.get('endingDate')?.value
      ? this.filtersForm.get('endingDate')?.value
      : this.endingDate;
    const filters = {
      majors: this.selectedMajorList,
      city: this.city,
      startingDate: this.startingDate,
      endingDate: this.endingDate,
    };
    console.table(filters);
    this.getInternshipList(
      this.selectedMajorList,
      this.city,
      new Date(this.startingDate),
      new Date(this.endingDate),
      this.page
    );
  }
  selectPage(page: number) {
    this.page = page;
    console.log(page);
    this.getInternshipList(
      this.selectedMajorList,
      this.city,
      new Date(this.startingDate),
      new Date(this.endingDate),
      this.page
    );
  }
  nextPage() {
    this.page++;
    this.getInternshipList(
      this.selectedMajorList,
      this.city,
      new Date(this.startingDate),
      new Date(this.endingDate),
      this.page + 1
    );
  }
  prevPage() {
    this.page--;
    this.getInternshipList(
      this.selectedMajorList,
      this.city,
      new Date(this.startingDate),
      new Date(this.endingDate),
      this.page
    );
  }
  numberToArray(total: number): number[] {
    let array: number[] = [];
    for (let i = 1; i <= total; i++) {
      array = [...array, i];
    }
    return array;
  }
  startingDateReset() {
    this.filtersForm.get('startingDate')?.reset();
    this.startingDate = new Date('2019-5-12');
  }
  endingDateReset() {
    this.filtersForm.get('endingDate')?.reset();
    this.endingDate = new Date('2023-5-12');
  }
}
