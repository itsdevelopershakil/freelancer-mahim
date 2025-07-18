import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Social from "../Social";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="mt-8 mb-20">
      <div className="max-width">
        <nav className="flex items-center justify-between gap-[30px]">
          <div className="flex items-center gap-1 xl:gap-2.5 shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              className="w-10 shrink-0 object-contain"
            />
            <h1 className="hidden sm:block font-bold text-sm xl:text-base text-[#101015] leading-5">
              Suhayel Ahmed <br /> Nasim
            </h1>
          </div>
          <NavLinks />
          <div className="ml-auto lg:ml-0 shrink-0 hidden sm:flex items-center gap-3 border border-[#E7E7E6] pl-[15px] pr-5 py-2.5 rounded-[30px] cursor-pointer select-none">
            <span className="bg-[#3BCD83] size-3 rounded-full shrink-0"></span>
            <p className="text-[#101015] text-xs xl:text-base">OPEN TO WORK</p>
          </div>
          <Social />
          <button type="button" className="block lg:hidden">
            <GiHamburgerMenu className="text-xl" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
