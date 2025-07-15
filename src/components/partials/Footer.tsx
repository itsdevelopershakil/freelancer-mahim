import VectorImg from "@/assets/images/footer-vector.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#101015] py-20" id="contact">
      <div className="max-width text-center relative">
        <Image
          src={VectorImg}
          alt="Vertor image of footer"
          className="absolute top-0 left-0 w-[120px] lg:w-auto"
        />
        <Image
          src={VectorImg}
          alt="Vertor image of footer"
          className="absolute bottom-0 right-0 w-[120px] lg:w-auto"
        />
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-[60px] lg:text-[80px] font-semibold text-white">
            That&apos;s it! Now it&apos;s <br /> your turn to say hi.
          </h1>
          <p className="font-bricolage text-[#B7B7B5] lg:text-lg leading-7 mt-5 mb-10">
            I&apos;ll make it easy for you… This is how you pronounce my name
            —Mahim I hope to hear from you!
          </p>
          <Link
            href={"mailto:masudhasanmahim07@gmail.com"}
            className="inline-block px-5 sm:px-8 py-2 sm:py-4 rounded-[30px] font-medium text-sm sm:text-base lg:text-lg text-[#101015] bg-white"
          >
            masudhasanmahim07@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
