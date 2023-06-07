export interface PersonSkillDto {
    personSkillId?: number;
    personId?: number;
    skillId?: number;
    skill: {
        name: string;
        skillCategories: [
            {
                category: {
                    name: string;
                }
            }
        ];
    };
}