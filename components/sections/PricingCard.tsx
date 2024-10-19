import React, {useEffect, useState} from "react";
import {Button} from "../ui/button";
import {Check} from "lucide-react";

type feature = {
  type: string;
  price: {monthly: number; annual: number};
  description: string;
  features: string[];
};
type props = {
  item: feature;
  type: "monthly" | "annual";
  i: number;
};

export default function PricingCard({item, type, i}: props) {
  const [price, setPrice] = useState(item.price.monthly);
  useEffect(() => {
    let interval: any;
    let counter = price;
    if (type == "annual") {
      interval = setInterval(() => {
        counter--;
        if (counter <= item.price.annual) {
          setPrice(item.price.annual);
          clearInterval(interval);
          return;
        }
        setPrice(counter);
      }, 50 / (i + 1));
    }

    if (type == "monthly") {
      interval = setInterval(() => {
        counter++;
        if (counter >= item.price.monthly) {
          setPrice(item.price.monthly);
          clearInterval(interval);
          return;
        }
        setPrice(counter);
      }, 50 / (i + 1));
    }

    return () => {
      clearInterval(interval);
    };
  }, [type]);
  return (
    <div className="rounded-xl pricing-card md:min-w-[230px] max-sm:w-full">
      <div className="gradient-2 relative p-8 rounded-xl flex flex-col justify-center items-center">
        <div className="text-sm mb-2">{item.type}</div>
        <div className="flex items-end mb-2">
          <div className={`text-5xl font-bold ${i == 1 && "text-primary"}`}>${price}</div>
          <div className="text-muted-foreground">/mo</div>
        </div>
        <div className="text-muted-foreground">{item.description}</div>
        <div className="mt-5 py-5 border-t w-full flex flex-col gap-2 justify-center items-center">
          {item.features.map((feature, i2) => (
            <div key={i2} className="my-2 sm:justify-center flex items-center gap-3">
              <div className={`${i == 1 ? "bg-primary" : "bg-secondary"} rounded-full p-1`}>
                <Check size={14} />
              </div>
              <div className="text-nowrap">{feature}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 max-sm:w-full">
          <Button className="max-sm:w-full">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
