"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import portfolio1 from "@/public/portfolio1.png";
import portfolio2 from "@/public/portfolio2.png";
import portfolio3 from "@/public/portfolio3.png";
import ChevronRight from "@/public/chevron-right.png";
import airbnb from "@/public/airbnb.png";

export default function PortfolioSection() {
  return (
    <section className="bg-black text-white px-4 py-16 flex justify-center">
      <div className="max-w-md w-full space-y-16">
        {/* ===================== */}
        {/* Frontend In Action */}
        {/* ===================== */}
        <div className="space-y-8">
          <div>
            <h2 className="text-[28px] font-bold flex justify-center">
              Frontend in Action
            </h2>
            <p className="text-[14px] text-neutral-400 font-normal mt-2 flex justify-center text-center">
              These are hands-on projects where I delivered clean, responsive
              user interfaces.
            </p>
          </div>

          {/* Portfolio Item */}
          {[
            {
              title: "Portofolio 1",
              year: "2025",
              image: portfolio1,
            },
            {
              title: "Portofolio 2",
              year: "2025",
              image: portfolio2,
            },
            {
              title: "Portofolio 3",
              year: "2025",
              image: portfolio3,
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative w-full h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-[20px] text-white font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-neutral-400 font-normal">
                      {item.year}
                    </p>
                  </div>

                  <Image
                    src={ChevronRight}
                    alt="Chevron Right"
                    width={40}
                    height={40}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ===================== */}
        {/* Testimonial Section */}
        {/* ===================== */}
        <div className="space-y-8">
          <div>
            <h2 className="text-[28px] font-bold text-white flex justify-center">
              Trusted by Teams, Valued by Clients
            </h2>
            <p className="text-[14px] font-normal text-neutral-400 mt-2">
              A few kind words from the people behind the projects Edwin helped
              bring to life.
            </p>
          </div>

          <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl">
            <CardContent className="p-6 space-y-5">
              {/* Company */}
              <img src={airbnb.src} alt="Airbnb Logo" width={96} height={36} />

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[16px] font-normal text-neutral-200">
                "Edwin delivered clean and efficient code that made our app load
                faster and feel smoother. He’s a pleasure to work with."
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-[14px] font-bold text-neutral-25">
                  Sarah Liem
                </p>
                <p className="text-[14px] font-normal text-neutral-500">
                  Product Manager at TechSync
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            <span className="w-3 h-1.5 rounded-full bg-purple-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
