import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear().toString();

  return (
    <footer
      className="w-full bg-[#0a0a0acc] h-16 px-4 border-white/10 border-t shadow-lg flex items-center justify-between"
      role="contentinfo"
    >
      <section className="w-full max-w-5xl flex items-center justify-between mx-auto">
        <p>&copy; All Rights Reserved {year}</p>
        <section
          className="flex gap-8 text-3xl md:text-4xl"
          aria-label="Social Links"
        >
          <a
            href="https://github.com/ARibeiroDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alberto-ribeiro-232465374"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
