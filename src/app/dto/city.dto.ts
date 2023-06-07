export class CityDto {
  cityId: number;
  name: string;
  constructor(cityId: number, name: string) {
    this.cityId = cityId;
    this.name = name;
  }
}
