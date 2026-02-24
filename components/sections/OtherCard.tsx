import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const disadvantages = [
  "React Expert",
  "Pixel Perfect",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Performance Optimization",
  "Responsive Website",
  "Ul Design Proficiency (Figma)",
];

export default function OtherCard() {
  return (
    <section className="px-4">
      <Card className="bg-000000 border border-neutral-700 rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-[18px] font-semibold text-neutral-25">Other</h3>

          {disadvantages.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-[14px] text-neutral-500"
            >
              <X className="w-6 h-6 text-red-600" />
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
