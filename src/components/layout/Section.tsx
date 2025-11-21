import type { ReactNode } from "react";
import ScrollReveal from "../ui/ScrollReveal";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <ScrollReveal>
      <section
        id={id}
        className={`min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center pt-20 scroll-mt-5 px-4 mx-auto ${className}`}
      >
        {children}
      </section>
    </ScrollReveal>
  );
};

export default Section;
