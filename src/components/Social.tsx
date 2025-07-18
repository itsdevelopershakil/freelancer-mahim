import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";

const Social = () => {
  const socialLinks = [
    {
      id: 1,
      icon: (
        <FaFacebookSquare className="text-sm xl:text-[19px] text-[rgba(43,43,45,0.80)] group-hover:text-[#2B2B2D] duration-300" />
      ),
      url: "",
    },
    {
      id: 2,
      icon: (
        <ImLinkedin className="text-sm xl:text-[19px] text-[rgba(43,43,45,0.80)] group-hover:text-[#2B2B2D] duration-300" />
      ),
      url: "",
    },
    {
      id: 3,
      icon: (
        <FaSquareXTwitter className="text-sm xl:text-[19px] text-[rgba(43,43,45,0.80)] group-hover:text-[#2B2B2D] duration-300" />
      ),
      url: "",
    },
  ];
  return (
    <div className="flex items-center gap-2.5 shrink-0 ml-auto sm:ml-0">
      {socialLinks.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className="size-7 xl:size-10 rounded-full border border-[rgba(43,43,45,0.15)] flex items-center justify-center hover:border-[#2B2B2D] group duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
