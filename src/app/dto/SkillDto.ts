export interface SkillDto {
    skillId?: number;
    name: string;
    skillCategories: [
        {
            category: {
                name: string;
            }
        }
    ];
}