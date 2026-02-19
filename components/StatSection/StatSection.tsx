"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const stats = [
  {
    value: "2+",
    label: "Years Experience",
    image: "/images/profile1.jpg",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    image: "/images/profile2.jpg",
  },
  {
    value: "12+",
    label: "Project Delivered",
    image: "/images/project.jpg",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] md:text-5xl font-bold leading-tight">
          Proven Numbers. Real Impact.
        </h2>
        <p className="text-neutral-400 mt-4 text-[16px]">
          From shipped products to years of experience
        </p>

        {/* Stats List */}
        <div className="mt-14 space-y-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-transparent border-0 border-b border-gray-800 rounded-none"
            >
              <CardContent className="flex items-center justify-between py-8 px-0">
                {/* Left Side */}
                <div className="flex items-center gap-6">
                  <div className="text-purple-500">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-[40px] text-white font-bold">
                      {stat.value}
                    </h3>
                  </div>

                  <p className="text-neutral-25 text-[16px] font-medium max-w-37.5 leading-snug">
                    {stat.label}
                  </p>
                </div>

                {/* Right Image */}
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
