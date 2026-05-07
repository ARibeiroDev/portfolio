import SkillPill from "../ui/SkillPill";

const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Javascript (ES6+)",
    "TypeScript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Sass/Scss",
    "Bootstrap",
    "Angular",
  ];

  const backendSkills = [
    "Node.js",
    "NestJS",
    "Express",
    "Prisma ORM",
    "MongoDB",
    "PostgreSQL",
    "REST API Design"
  ];

  const tools = ["VSCode", "npm", "Git", "GitHub", "Vite", "PgAdmin", "Vitest", "Neon (serverless Postgres)"];

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        About Me
      </h2>

      <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        <p className="text-gray-300 mb-6">
          I’m a backend-focused full-stack developer who enjoys building reliable and scalable systems. <br />
          I care about clean architecture, secure APIs, and maintainable code. I also work with frontend technologies like React and Next.js to deliver complete applications when needed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
            <div aria-label="Frontend skills" className="flex flex-wrap gap-2">
              {frontendSkills.map((tech) => (
                <SkillPill key={tech} tech={tech} />
              ))}
            </div>
          </section>

          <section className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Backend</h3>
            <div aria-label="Backend skills" className="flex flex-wrap gap-2">
              {backendSkills.map((tech) => (
                <SkillPill key={tech} tech={tech} />
              ))}
            </div>
          </section>
          <section className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Tools</h3>
            <div aria-label="Tools" className="flex flex-wrap gap-2">
              {tools.map((tech) => (
                <SkillPill key={tech} tech={tech} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
