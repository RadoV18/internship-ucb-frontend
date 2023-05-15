import { Pipe, PipeTransform } from '@angular/core';
import { SkillDto } from '../dto/SkillDto';

@Pipe({
  name: 'skillFilter'
})
export class SkillFilterPipe implements PipeTransform {

  transform(value: SkillDto[] | undefined, args: string): SkillDto[] | undefined {
    if (!value) return undefined;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(data => {
      return data.name.toLowerCase().includes(args);
    });
  }
}
