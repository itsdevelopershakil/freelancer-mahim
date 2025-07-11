import gallery1 from "@/assets/images/gallery/gallery1.png";
import gallery2 from "@/assets/images/gallery/gallery2.png";
import gallery3 from "@/assets/images/gallery/gallery3.png";
import gallery4 from "@/assets/images/gallery/gallery4.png";
import gallery5 from "@/assets/images/gallery/gallery5.png";
import gallery6 from "@/assets/images/gallery/gallery6.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <>
      <Marquee
        pauseOnHover={true}
        autoFill={true}
        speed={60}
        className="**:gap-5 gap-5"
      >
        <div>
          <Image
            src={gallery1}
            alt="Gaallery Image"
            className="h-[374px] w-full rounded-[15px]"
          />
        </div>
        <div>
          <Image
            src={gallery2}
            alt="Gaallery Image"
            className="h-[374px] w-full rounded-[15px]"
          />
        </div>
        <div>
          <Image
            src={gallery3}
            alt="Gaallery Image"
            className="h-[374px] w-full rounded-[15px]"
          />
        </div>
      </Marquee>
      <Marquee
        pauseOnHover={true}
        autoFill={true}
        speed={60}
        className="**:gap-5 mt-5"
        direction="right"
      >
        <div>
          <Image
            src={gallery4}
            alt="Gaallery Image"
            className="h-[374px] w-full rounded-[15px]"
          />
        </div>
        <div>
          <Image
            src={gallery5}
            alt="Gaallery Image"
            className="h-[374px] w-full rounded-[15px]"
          />
        </div>
        <div>
          <Image
            src={gallery6}
            alt="Gaallery Image"
            className="h-[374px] w-full rounded-[15px]"
          />
        </div>
      </Marquee>
    </>
  );
};

export default Gallery;
