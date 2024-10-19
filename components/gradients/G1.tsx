export default function G1() {
  return (
    <div className="absolute w-full top-1/2 -translate-y-1/2 h-1/2 flex gap-10 blur-3xl opacity-45 z-0">
      <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full -top-10 absolute left-0"></div>
      <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full top-20 absolute left-1/4"></div>
      <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full -top-10 absolute left-1/2"></div>
      <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full top-12 absolute right-0"></div>
    </div>
  );
}
