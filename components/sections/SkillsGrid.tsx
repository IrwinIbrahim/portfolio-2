import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import html from "@/assets/images/html.png";
import css from "@/assets/images/css.png";
import javascript from "@/assets/images/js.png";
import typescpript from "@/assets/images/ts.png";
import sequalize from "@/assets/images/sequalize.png";
import mongodb from "@/assets/images/mongodb.png";

interface Skill {
  name: string;
  icon: string | StaticImageData;
}

const skills: Skill[] = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescpript },
  { name: "Sequalize", icon: sequalize },
  { name: "Mongo DB", icon: mongodb },
];

export default function SkillsGrid() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 px-4">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="bg-black border border-neutral-900 rounded-xl w-[172.5px] h-43"
          >
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
              <div className="text-3xl">
                {typeof skill.icon === "string" ? (
                  skill.icon
                ) : (
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={52.5}
                    height={52.5}
                  />
                )}
              </div>
              <p className="text-[16px] text-white">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
