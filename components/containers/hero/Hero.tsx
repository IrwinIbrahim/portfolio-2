import developer from "@/assets/images/developer.png";
import facebook from "@/assets/svg/fb.svg";
import instagram from "@/assets/svg/ig.svg";
import linkedin from "@/assets/svg/linkedin.svg";
import tiktok from "@/assets/svg/tiktok.svg";
import chevrondown from "@/assets/svg/chevrondown.svg";

export default function Hero() {
  return (
    <main className="py-26.75 px-4">
      <div>
        <img
          src={developer.src}
          alt="developer"
          className="h-103.5 w-[319.18px] mx-auto"
        />
      </div>

      <h1 className="font-bold text-[40px] px-4 py-2">EDWIN ANDERSON</h1>
      <div>
        <p className="font-bold text-[18px] px-4 py-2">About me</p>
        <p className="font-semibold text-[14px] px-4 py-2">
          Passionate about frontend development, I focus on crafting digital
          products.
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <img src={facebook.src} alt="facebook" className="h-10 w-10" />
        <img src={instagram.src} alt="instagram" className="h-10 w-10" />
        <img src={linkedin.src} alt="linkedin" className="h-10 w-10" />
        <img src={tiktok.src} alt="tiktok" className="h-10 w-10" />
      </div>

      <div>
        <img
          src={chevrondown.src}
          alt="chevrondown"
          className="h-15 w-[73.37px] mx-auto mt-14.75"
        />
      </div>
    </main>
  );
}
