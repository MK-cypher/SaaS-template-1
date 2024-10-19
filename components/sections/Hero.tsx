import {ArrowRight} from "lucide-react";
import {Button} from "../ui/button";
import HeroIcons from "./HeroIcons";

export default function Hero() {
  return (
    <div className="container mt-20 max-[796px]:text-center">
      <div className="py-20 flex max-[796px]:flex-col max-[796px]:gap-10 justify-between items-center">
        <div className="w-1/2 max-[796px]:w-full shrink-0">
          <h1 className="text-5xl font-bold">Hero section Header</h1>
          <p className="text-muted-foreground text-lg max-[796px]:max-w-[400px] max-[796px]:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio vel, debitis incidunt hic cum dicta!
          </p>
          <Button className="rounded-full mt-5">
            Join now! <ArrowRight size={16} />
          </Button>
        </div>
        <div className="w-1/2 max-[796px]:w-[85%] shrink-0 relative min-h-40 max-[796px]:px-20">
          <img src="/hero.png" alt="hero image" className="relative z-[1]" />
          <div className="hero-gradient rounded-full"></div>
          <HeroIcons />
        </div>
      </div>
    </div>
  );
}
