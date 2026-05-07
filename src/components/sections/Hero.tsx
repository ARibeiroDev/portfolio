const Hero = () => {
  return (
    <>
      <div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Alberto
        </h2>

        <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-200">
          Full-Stack Web Developer
        </h3>

        <h4 className="flex items-center justify-center lg:justify-start gap-2 font-semibold mb-4 text-gray-200">
          <span className="relative w-2 h-2 rounded-full bg-green-500 animate-pulse animate-glow"></span>
          Available for hire
        </h4>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I build fast, reliable and scalable web applications using TypeScript and modern backend technologies.
          I focus on backend architecture, API design, performance, and secure system development, while also delivering functional frontend interfaces when needed.
        </p>

        <div
          className="flex justify-center gap-4"
          aria-label="Call To Action Buttons"
        >
          <a
            href="#projects"
            aria-label="View my projects section"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all hover:-translate-y-0.5 hover:bg-blue-600"
          >
            View My Work
          </a>

          <a
            href="#contact"
            aria-label="Go to contact section"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all 
             hover:-translate-y-0.5 hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
      <figure className="hidden lg:block">
        <img
          src="img/hero_picture.png"
          width={433}
          height={577}
          alt="ARibeiroDev Photo"
          className="w-90 h-90 rounded-full object-contain grayscale contrast-150"
        />
        <figcaption className="sr-only">ARibeiroDev Photo</figcaption>
      </figure>
    </>
  );
};

export default Hero;
