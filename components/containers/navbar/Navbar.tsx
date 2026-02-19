import Image from "next/image";
import Star from "@/assets/images/star.png";
import Burger from "@/assets/svg/burger.svg";

export default function Navbar() {
  return (
    <nav className="sticky px-4 py-6.5">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image alt="Star" src={Star} className="w-6 h-6" />

          <h1>Edwin</h1>
        </div>

        <div>
          <Image alt="menu" src={Burger} className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
