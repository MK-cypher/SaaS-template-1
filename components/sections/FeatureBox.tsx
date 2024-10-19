import {CSSProperties, useEffect, useRef, useState} from "react";

type props = {
  feature: any;
  mouse: {x: number; y: number};
};
export default function FeatureBox({feature, mouse}: props) {
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
    window.addEventListener("pointermove", updatePosition);
    return () => {
      window.removeEventListener("pointermove", updatePosition);
    };
  }, []);
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
