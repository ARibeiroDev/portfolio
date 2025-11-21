import { useState, useEffect } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
import Footer from "./components/layout/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  //Prevent scrolling during loading screen
  useEffect(() => {
    document.body.style.overflow = !isLoaded ? "hidden" : "auto";
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
