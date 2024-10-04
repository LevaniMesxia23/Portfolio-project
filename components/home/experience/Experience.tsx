import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  { 
    title: "Web Canvas Geo",
    position: "Front end Developer" ,
    time: "September 2024 - Present",
    location: "Georgia",
    description:
      "I contribute to front-end development tasks, including building user interfaces with modern web technologies and maintaining code quality.",
    tech: [
      "React",
      "Javascript",
      "Typescript",
      "Git",
      "GitHub",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "UpWork",
    position: "Junior Front end Developer" ,
    time: "January 2024 - September 2024",
    location: "Georgia",
    description:
      "UpWork was my first step in employment, where I solved client problems using front-end technologies, further deepening my skills.",
    tech: [
      "React",
      "Javascript",
      "Typescript",
      "Git",
      "GitHub",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  }
];
