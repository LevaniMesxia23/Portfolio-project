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
    title: "UpWork",
    position: "Front end Developer",
    time: "2024 - Present",
    location: "Georgia",
    description:
      "After I realized that I could already solve other people's problems with my knowledge, Upwork was the first step in my employment, which helped me a lot to deepen my knowledge and gain experience.",
    tech: [
      "React",
      "Javascript",
      "Typescript",
      "Git",
      "GitHub",
      "Tailwind css",
      "Html",
      "Css",
    ],
  },
  
];
