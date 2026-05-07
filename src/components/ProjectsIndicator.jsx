import { useEffect, useState } from "react";

import { cn } from "../lib/utils";

const MouseFollower = ({ img, activeIndex, index, className }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setTarget({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);

    let animationFrame;
    const update = () => {
        setPos((p) => ({
            x: p.x + (target.x - p.x) * 0.1,
            y: p.y + (target.y - p.y) * 0.1,
        }));
        animationFrame = requestAnimationFrame(update);
    };
    update();

    return () => {
        window.removeEventListener("mousemove", handleMove);
        cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <div
        className={cn("fixed w-12 aspect-square rounded-full bg-[#00FFE5] pointer-events-none transition-transform duration-[0.05s] ease-out", className)}
        style={{
            left: `${pos.x - (activeIndex > index ? 0 : 60)}px`,
            top: `${pos.y - (activeIndex > index ? 40 : 0)}px`,
            zIndex: 50,
        }}
    >
        <img src={img} className="w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="Chat Space" />
    </div>
  );
}

export default MouseFollower