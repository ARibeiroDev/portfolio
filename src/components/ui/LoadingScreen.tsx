import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const [ping, setPing] = useState(false);
  const fullText = "<ARibeiroDev />";

  useEffect(() => {
    let index = 0;
    let lastUpdate = 0;

    const frame = (time: number) => {
      if (time - lastUpdate > 100) {
        index++;
        setText(fullText.slice(0, index));
        lastUpdate = time;
      }

      if (index <= fullText.length) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(() => setPing(true), 500);
        setTimeout(onComplete, 1000);
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div
        className={`mb-4 text-3xl font-mono font-bold ${
          ping ? "animate-ping" : ""
        }`}
        role="status"
        aria-live="polite"
      >
        {text}
        <span aria-hidden="true" className="animate-blink ml-1">
          |
        </span>
      </div>

      <div
        className={`w-48 h-0.5 bg-gray-800 rounded overflow-x-hidden ${
          ping ? "animate-ping" : ""
        }`}
      >
        <div className={"h-full bg-blue-500 animate-loading-bar"}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
