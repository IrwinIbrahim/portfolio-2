"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import airbnb from "@/public/airbnb.svg";
import coinbase from "@/public/coinbase.svg";
import webflow from "@/public/webflow.svg";
import Star from "@/assets/images/star-3.png";
import Dot from "@/assets/images/dot.png";

const experiences = [
  {
    year: "2025 - Present",
    company: "",
    logo: airbnb,
    color: "text-rose-500",
  },
  {
    year: "2025 - Present",
    company: "",
    logo: coinbase,
    color: "text-blue-500",
  },
  {
    year: "2025 - Present",
    company: "",
    logo: webflow,
    color: "text-blue-400",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="bg-black min-h-screen flex justify-center py-16 px-4">
      <div className="relative max-w-md w-full">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-gray-600 to-gray-600" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Dot */}
              <div />
              <Image
                src={Dot}
                alt="dot"
                className="absolute left-1.5 top-6 w-3.6 h-3.6"
              />

              <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
                <CardContent className="p-6 space-y-4">
                  <p className="text-[16px] font-bold text-neutral-25">
                    {exp.year}
                  </p>

                  <div className="flex items-center gap-2">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={85.33}
                      height={32}
                    />
                    <h3 className={`text-lg font-semibold ${exp.color}`}>
                      {exp.company}
                    </h3>
                  </div>

                  <ul className="space-y-3 text-[14px] font-normal text-neutral-25">
                    <li className="flex gap-3">
                      <Image src={Star} alt="star" width={7.5} height={7.5} />
                      Develop responsive and user-friendly web interfaces using
                      modern frontend technologies.
                    </li>

                    <li className="flex gap-3">
                      <Image src={Star} alt="star" width={7.5} height={7.5} />
                      Collaborate with UI/UX designers to turn design mockups
                      into functional components.
                    </li>

                    <li className="flex gap-3">
                      <Image src={Star} alt="star" width={7.5} height={7.5} />
                      Optimize web applications for maximum speed and
                      scalability.
                    </li>

                    <li className="flex gap-3">
                      <Image src={Star} alt="star" width={7.5} height={7.5} />
                      Ensure cross-browser and cross-platform compatibility.
                    </li>

                    <li className="flex gap-3">
                      <Image src={Star} alt="star" width={7.5} height={7.5} />
                      Implement reusable code and component libraries for future
                      use.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
