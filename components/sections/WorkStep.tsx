export default function WorkStep({item, step, i}: {item: any; step: number; i: number}) {
  return (
    <div
      key={i}
      className={`${
        step >= i + 1 ? "opacity-100" : "opacity-0"
      } transition-all duration-500 p-3 rounded-lg border w-fit work-step-box gradient-1 relative max-w-[30%]`}
    >
      <div className="step-line"></div>
      <div className="step-dot"></div>
      <div className="font-bold"> {item.title}</div>
      <div className="text-muted-foreground">{item.description}</div>
    </div>
  );
}
