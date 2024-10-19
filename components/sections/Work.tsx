"use client";
import {workSteps} from "@/lib/consts";
import React, {CSSProperties, UIEvent, useEffect, useRef, useState} from "react";
import WorkStep from "./WorkStep";
import G2 from "../gradients/G2";

export default function Work() {
  const [line, setLine] = useState(-1);
  const [step, setStep] = useState(0);
  const el = useRef<HTMLDivElement>(null);

  const updateLine = () => {
    const rect = el.current?.getBoundingClientRect();
    if (rect) {
      const elTop = rect?.top + window.scrollY;
      const elStart = elTop - window.innerHeight * 0.9;
      const elTotalScroll = elStart + window.innerHeight / 3;
      const currentScroll = window.scrollY - elStart;
      const percentage = (currentScroll * 100) / elTotalScroll;

      setStep(percentage / 20);
      if (percentage > 0 && percentage < 100) {
        setLine(percentage);
      }
    }
  };

  useEffect(() => {
    updateLine();
    document.addEventListener("scroll", updateLine);

    return () => {
      document.removeEventListener("scroll", updateLine);
    };
  }, []);
  return (
    <section className="py-20 relative" id="work">
      <div className="bg-gradient-to-r from-primary to-blue-400 w-1/3 blur-3xl opacity-30 rounded-full aspect-square top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 work-blur"></div>
      <div className="container">
        <div className="flex justify-center items-center ">
          <div className="rounded-full px-4 py-1 border bg-gradient-to-br from-transparent from-50% shadow-xl to-blue-500">
            How it works
          </div>
        </div>
        <div className="text-3xl font-semibold text-center mt-3">Eeasy and Quick Steps</div>
        <div
          ref={el}
          className="mt-10 relative w-full work-section transition-all duration-300 flex flex-col justify-start items-center gap-10"
          style={{"--line-transparency": `${line}%`} as CSSProperties}
        >
          <div className="w-[1px] h-full absolute middle-line top-0 left-1/2 -translate-x-1/2 transition-all duration-300"></div>
          {workSteps.map((item, i) => (
            <WorkStep key={i} item={item} i={i} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
