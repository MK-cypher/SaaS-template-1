"use client";

import {useState} from "react";
import PriceType from "./PriceType";
import {pricing} from "@/lib/consts";
import PricingCard from "./PricingCard";

export default function Pricing() {
  const [type, setType] = useState<"monthly" | "annual">("monthly");
  return (
    <section id="pricing" className="py-20">
      <div className="flex justify-center items-center">
        <div className="rounded-full px-4 py-1 border bg-gradient-to-br from-transparent from-50% shadow-xl to-blue-500">
          Pricing
        </div>
      </div>
      <div className="text-3xl font-semibold text-center mt-3 mb-10">Flexible and Affordable Pricing</div>
      <PriceType type={type} setType={setType} />
      <div className="container pricing-container flex max-sm:flex-col items-center justify-center mt-10 gap-3">
        {pricing.map((item, i) => (
          <PricingCard i={i} key={i} item={item} type={type} />
        ))}
      </div>
    </section>
  );
}
