import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Star from "../../assets/images/star-2.png";

const advantages = [
  "React Expert",
  "Pixel Perfect",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Performance Optimization",
  "Responsive Website",
  "Ul Design Proficiency (Figma)",
];

export default function WithMeCard() {
  return (
    <section className="px-4">
      <Card className="bg-linear-to-br from-purple-900 to-pink-700 border-0 rounded-2xl text-white">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-[18px] font-semibold text-neutral-25">With Me</h3>

          {advantages.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm">
              <Image src={Star} alt="star" width={16} height={16} />
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
