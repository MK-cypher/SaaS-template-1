import {CSSProperties, useEffect, useRef, useState} from "react";
import G2 from "../gradients/G2";

type props = {
  feature: any;
  mouse: {x: number; y: number};
  main?: boolean;
};
export default function FeatureBox({feature, mouse, main}: props) {
  const element = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({top: 0, left: 0});

  const updatePosition = () => {
    if (element.current) {
      const rect = element.current.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  useEffect(() => {
    updatePosition();

    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [mouse]);
  return (
    <div
      className={`rounded-3xl p-0.5 bg-background relative border-glow overflow-hidden feature-box`}
      style={
        {
          "--x": `${mouse.x - position.left}px`,
          "--y": `${mouse.y - position.top}px`,
        } as CSSProperties
      }
      ref={element}
    >
      <div className={`bg-secondary relative p-3 rounded-3xl h-full`}>
        <div>
          <feature.Icon />
        </div>
        <div className="text-lg font-bold my-2">{feature.title}</div>
        <div>{feature.description}</div>
      </div>
    </div>
  );
}
