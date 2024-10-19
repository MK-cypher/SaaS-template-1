"use client";
import {features} from "@/lib/consts";
import {useEffect, useState} from "react";
import FeatureBox from "./FeatureBox";
import G1 from "../gradients/G1";

export default function Features() {
  const [mouse, setMouse] = useState({x: -1000, y: -1000});

  const getMousePosition = (e: MouseEvent) => {
    const x = e.pageX;
    const y = e.pageY;
    setMouse({x, y});
  };
  useEffect(() => {
    window.addEventListener("pointermove", getMousePosition);

    return () => {
      window.removeEventListener("pointermove", getMousePosition);
    };
  }, []);

  return (
    <section className="py-20 container relative" id="features">
      <G1 />
      <div className="grid grid-cols-3 gap-1 max-sm:grid-cols-2 ">
        {features.map((item, i) => (
          <FeatureBox key={i} feature={item} mouse={mouse} />
        ))}
      </div>
    </section>
  );
}
