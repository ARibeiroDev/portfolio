import NavBar from "../ui/NavBar";

const Header = () => {
  return (
    <header className="fixed w-full bg-[#0e0e0e80] backdrop-blur-xl h-16 px-4 border-white/10 border-b shadow-lg z-50 flex">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white p-2 rounded"
      >
        Skip to content
      </a>
      <section className="w-full max-w-5xl flex items-center justify-between mx-auto">
        <h1 className="text-lg font-bold text-blue-500">
          <a href="/" aria-label="Homepage">
            ARibeiroDev
          </a>
        </h1>
        <NavBar />
      </section>
    </header>
  );
};

export default Header;
