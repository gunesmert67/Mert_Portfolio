import React from 'react';
import SkillItem from './SkillItem';

interface Skill {
  id: number;
  image: string;
  width: number;
  height: number;
  skillName: string;
  skillLevel: number;
  link?: string;
  invertInDark?: boolean;
}

interface SkillsGalleryProps {
  title?: string;
  skillsData: Skill[];
}

/**
 * SkillsGallery component renders a responsive CSS Grid (Bento style) of SkillItem components.
 */
const SkillsGallery = ({ skillsData }: SkillsGalleryProps) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 px-4 max-w-[1000px] mx-auto w-full">
      {skillsData.map((skill) => (
        <SkillItem
          key={skill.id}
          id={skill.id}
          src={skill.image}
          width={skill.width}
          height={skill.height}
          skillName={skill.skillName}
          skillLevel={skill.skillLevel}
          link={skill.link}
          invertInDark={skill.invertInDark}
        />
      ))}
    </div>
  );
};

export default SkillsGallery;
