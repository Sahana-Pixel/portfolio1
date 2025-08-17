import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'NMAM Institute of Technology, Nitte',
    period: '2023 - 2027',
    score: '9.4 cgpa',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Viveka Pre University College, Kota',
    period: '2021 - 2023',
    score: '94%',
  },
  {
    degree: 'Secondary (X)',
    institution: "Vishwa Vinayaka CBSE School",
    period: '2020-2021',
    score: '90%',
    
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Here’s where I first started exploring and learning.">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
