import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TbBrandWhatsappFilled } from "react-icons/tb";

type PortfolioCardProps = {
  data: {
    id: number;
    image: { portFolioImage: StaticImageData };
    title: string;
    date: string;
  };
};

const PortfolioCard = ({ data }: PortfolioCardProps) => {
  return (
    <div className="w-full p-5 rounded-[15px] bg-[#1E1E1E] border border-[rgba(29,29,29,0.10)]">
      <Image
        src={data.image.portFolioImage}
        alt="Portfolio Image"
        className="w-full h-[220px] sm:h-[200px] xl:h-[270px] object-cover rounded-lg"
      />
      <h1
        className="font-semibold text-lg xl:text-[26px] line-clamp-1 text-white mt-[15px] mb-2.5"
        title={data.title}
      >
        {data.title}
      </h1>
      <p className="font-medium text-sm sm:text-base leading-5 text-[#B7B7B5] mb-5">
        {data.date}
      </p>
      <div className="flex">
        <Link
          href={""}
          className="pl-5 pr-4 py-2.5 flex items-center gap-2.5 bg-[#1E1E1E] border border-[#B7B7B5] text-[#B7B7B5] hover:bg-white hover:text-[#101015] duration-300 group rounded-[30px] font-medium text-sm xl:text-base"
        >
          View Case Study{" "}
          <TbBrandWhatsappFilled className="text-2xl text-white group-hover:text-[#101015] duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
