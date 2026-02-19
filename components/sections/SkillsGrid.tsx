import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML", icon: "🔥" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Supabase", icon: "🗄️" },
  { name: "Mongo DB", icon: "🍃" },
];

export default function SkillsGrid() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="bg-black border border-neutral-900 rounded-xl w-[172.5px] h-43"
          >
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-[16px] text-white">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
