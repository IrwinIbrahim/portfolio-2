import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const advantages = [
  "Direct Expert",
  "Pixel Perfect",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Performance Optimization",
  "Responsive Website",
  "UI Design Prototyping (Figma)",
];

export default function WithMeCard() {
  return (
    <section>
      <Card className="bg-linear-to-br from-purple-900 to-pink-700 border-0 rounded-2xl text-white">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold">With Me</h3>

          {advantages.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm">
              <Check className="w-4 h-4 text-green-400" />
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
