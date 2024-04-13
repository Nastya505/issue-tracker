import Image from "next/image";
import oranguran from "@/public/images/orangutan.jpg";

export default function Home() {
  return (
    <div className="relative w-96 h-64"> 
      <Image
        src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
        fill
        alt="orangutan"
        className="object-cover"
        quality={75}
        sizes="(max-width: 480px) 80vw, (max-width: 768px) 50vw, 33vw"
      />
      {/* <Image src="https://svgsilh.com/svg_v2/1801287.svg" color="red" fill alt="orangutan" className="object-cover" /> */}
    </div>
  );
}
