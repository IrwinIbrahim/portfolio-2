"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import Hero from "@/components/containers/hero/Hero";
import StatsSection from "@/components/StatSection/StatSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillsGrid from "@/components/sections/SkillsGrid";
import QuoteCard from "@/components/sections/QuoteCard";
import ResultsHeader from "@/components/sections/ResultsHeader";
import WithMeCard from "@/components/sections/WithMeCard";
import OtherCard from "@/components/sections/OtherCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <StatsSection />

      <div className="w-full max-w-md space-y-8">
        <HeroSection />
        <SkillsGrid />
        <QuoteCard />
        <ResultsHeader />
        <WithMeCard />
        <OtherCard />
      </div>

      <ExperienceTimeline />

      <PortfolioSection />

      <div className="min-h-screen bg-black text-white flex justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-10">
          {/* FAQ SECTION */}
          <section className="space-y-4">
            <div>
              <h1 className="text-[28px] font-bold">
                Frequently Asked Questions
              </h1>
              <p className="text-[14px] font-normal text-neutral-400 mt-2">
                Got questions? Here are the answers to the ones we get asked the
                most.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1" className="border-zinc-800">
                <AccordionTrigger className="text-[18px] font-semibold mt-6 hover:no-underline">
                  What technologies do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] font-normal text-neutral-400 leading-relaxed mt-0.5">
                  I mainly work with HTML, CSS, JavaScript, and frameworks like
                  React, Next.js, and Vue. I also have experience using Tailwind
                  CSS, TypeScript, and working with APIs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-zinc-800">
                <AccordionTrigger className="text-[18px] font-semibold text-neutral-25 hover:no-underline mt-4">
                  Do you work on freelance or remote projects?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] font-normal text-neutral-400 leading-relaxed mt-0.5">
                  Yes, I'm available for freelance and fully remote projects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-zinc-800">
                <AccordionTrigger className="text-[18px] font-semibold text-neutral-25 hover:no-underline mt-4">
                  Can you convert Figma or Sketch designs into code?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] font-normal text-neutral-400 leading-relaxed mt-0.5">
                  Absolutely. I focus on pixel-perfect implementation and
                  responsive layouts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-zinc-800">
                <AccordionTrigger className="text-[18px] font-semibold text-neutral-25 hover:no-underline mt-4">
                  Do you collaborate with backend developers or teams?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] font-normal text-neutral-400 leading-relaxed mt-0.5">
                  Yes, I collaborate effectively with backend teams and product
                  managers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-zinc-800">
                <AccordionTrigger className="text-[18px] font-semibold text-neutral-25 hover:no-underline mt-4">
                  Are you available for full-time roles?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] font-normal text-neutral-400 leading-relaxed mt-0.5">
                  I’m open to discussing exciting full-time opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* CONTACT CARD */}
          <section>
            <Card className="bg-linear-to-b from-zinc-900 via-zinc-900 to-purple-900 border-zinc-800 rounded-3xl p-6 space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center mt-10">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={361}
                  height={386}
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-[28px] font-bold text-white mt-6">
                  Start a Conversation
                </h2>
                <p className="text-[16px] font-normal text-neutral-400 mt-4">
                  I’m open to freelance gigs, collaborations, or even just a
                  casual chat.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[14px] font-bold text-neutral-25 mt-6">
                    Name*
                  </label>
                  <Input
                    placeholder="What should I call you?..."
                    className="bg-zinc-950 border-zinc-800 focus-visible:ring-purple-500 text-[16px] font-normal text-neutral-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[14px] font-bold text-neutral-25 mt-6">
                    Email*
                  </label>
                  <Input
                    type="email"
                    placeholder="Where can I reach you? ..."
                    className="bg-zinc-950 border-zinc-800 focus-visible:ring-purple-500 text-[16px] font-normal text-neutral-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[14px] font-bold text-neutral-25 mt-6">
                    Message*
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or just say hi :) ..."
                    className="bg-zinc-950 border-zinc-800 min-h-25 focus-visible:ring-purple-500 text-[16px] font-normal text-neutral-500"
                  />
                </div>

                <Button className="w-full bg-white text-black text-[14px] font-semibold hover:bg-gray-200 rounded-lg h-12">
                  Let’s Build Something
                </Button>
              </form>

              {/* Footer */}
              <div className="text-center text-[12px] font-normal text-neutral-400 pt-4.75">
                © 2025 Edwin Anderson. All rights reserved.
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
