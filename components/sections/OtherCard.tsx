import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const disadvantages = [
  "Indirect Expert",
  "Pixel Partial",
  "Basic Technical Proficiency",
  "Cluttered, Hard-to-Scale Code",
  "Performance Overlooked",
  "Inconsistent Website",
  "UI Design Mockup Only",
];

export default function OtherCard() {
  return (
    <section>
      <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold">Other</h3>

          {disadvantages.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <X className="w-4 h-4 text-red-500" />
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
