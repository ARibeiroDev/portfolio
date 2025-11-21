import { FaArrowRight } from "react-icons/fa6";
import SkillPill from "./SkillPill";

export interface ProjectProps {
  title: string;
  description: string;
  skills: string[];
  liveLink: string;
  sourceLink: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  skills,
  liveLink,
  sourceLink,
  image,
}: ProjectProps) => {
  return (
    <article className="flex flex-col p-6 rounded-xl max-w-125 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
      <img
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg w-full aspect-6/2 object-cover mb-4"
        loading="lazy"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <section className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <SkillPill key={skill} tech={skill} />
        ))}
      </section>
      <section className="flex flex-col flex-1 items-start justify-end">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="flex items-center gap-2 text-blue-400 hover:animate-pulse transition-colors my-2"
        >
          Live Project <FaArrowRight />
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="flex items-center gap-2 text-blue-400 hover:animate-pulse transition-colors my-2"
        >
          Source Code <FaArrowRight />
        </a>
      </section>
    </article>
  );
};

export default ProjectCard;
