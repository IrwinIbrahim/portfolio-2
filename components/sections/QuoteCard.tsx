import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuoteCard() {
  return (
    <section>
      <Card className="rounded-2xl border-0 bg-linear-to-br from-purple-600 to-pink-500 text-white">
        <CardContent className="p-6 space-y-4">
          <p className="text-sm italic">
            "Programming is the art of telling another human what you want the
            computer to do."
          </p>
          <p className="text-xs">— Donald Knuth</p>
          <Button className="w-full bg-white text-black hover:bg-gray-200">
            Let’s Build Something
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
