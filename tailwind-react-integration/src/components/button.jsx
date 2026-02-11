import { useRef } from "react";

export default function RunawayButton() {
  const buttonRef = useRef(null);

  const moveButton = () => {
    const button = buttonRef.current;
    const div = button.parentElement;

    const maxX = div.clientWidth - button.offsetWidth;
    const maxY = div.clientHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  return (
    <div className="relative w-200 h-screen overflow-hidden bg-black flex items-center justify-center">
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        className="
         absolute
          px-6 py-3
          bg-yellow-400
          text-black font-bold
          rounded-xl
          shadow-lg
          transition-all duration-200 ease-out
          cursor-pointer
        "
      >
        Click Me 😏
      </button>
    </div>
  );
}
