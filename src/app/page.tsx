import FlowerShape from "@/assets/images/flower-shape.png";
import HeroImg from "@/assets/images/hero.png";
import NiceToMeetImg from "@/assets/images/nice-to-meet.png";
import Expertise from "@/components/Expertise";
import Gallery from "@/components/Gallery";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Portfolio from "@/components/Portfolio";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { servicesData } from "@/constants/servicesData";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="max-width">
          <div className="grid sm:grid-cols-12 gap-10 relative">
            <Image
              src={FlowerShape}
              alt="Flower Shape"
              className="object-contain absolute bottom-[100px] lg:bottom-[85px] left-1/2 lg:left-3/5"
            />
            <div className="sm:col-span-7 lg:col-span-8 order-1 sm:order-none">
              <div>
                <h1 className="text-2xl leading-10 sm:text-3xl sm:leading-[46px] lg:text-5xl lg:leading-16 xl:text-[64px] xl:leading-[80px] font-semibold text-[#101015]">
                  Driving Real Results with Digital Marketing
                </h1>
                <p className="xl:text-lg leading-[28px] text-[#454545] mt-5 mb-10 lg:mr-[85px]">
                  I craft growth-focused strategies using Facebook Ads, Google
                  Ads, YouTube SEO, and Social Media Marketing. I help startups
                  and businesses make smart digital decisions — from product
                  launch to growth — with data-backed campaigns and compelling
                  visuals.
                </p>
                <div className="flex mb-20">
                  <Link
                    href={"tel:000000"}
                    className="flex items-center gap-[15px] px-6 sm:px-8 py-3 sm:py-4 rounded-[30px] bg-[#101015] border border-[#101015] text-white hover:text-[#101015] hover:bg-[#F6F7FF] duration-300"
                  >
                    <span className="text-sm lg:text-base xl:text-lg font-semibold">
                      Chat Real-Time on
                    </span>
                    <IoLogoWhatsapp className="lg:text-2xl" />
                    <span className="text-sm lg:text-base xl:text-lg font-semibold">
                      Whatsapp
                    </span>
                  </Link>
                </div>
                <div className="sm:w-[150%] md:w-[120%] lg:w-full flex flex-wrap sm:flex-nowrap gap-2.5 lg:gap-[30px] !font-bricolage">
                  <p className="text-[#101015] text-lg sm:text-base lg:text-lg xl:text-2xl leading-8 w-full sm:w-auto">
                    2+
                    <br />
                    years experience
                  </p>
                  <div className="flex h-px sm:h-[64px] bg-[rgba(69,69,69,.4)] w-[64px] sm:w-px">
                    <span className="h-full sm:h-1/2 w-1/2 sm:w-full bg-[#454545]"></span>
                  </div>
                  <p className="text-[#101015] text-lg sm:text-base lg:text-lg xl:text-2xl leading-8 w-full sm:w-auto">
                    250+
                    <br />
                    work reviews
                  </p>
                  <div className="flex h-px sm:h-[64px] bg-[rgba(69,69,69,.4)] w-[64px] sm:w-px">
                    <span className="ml-auto sm:mt-auto h-full sm:h-1/2 w-1/2 sm:w-full bg-[#454545]"></span>
                  </div>
                  <p className="text-[#101015] text-lg sm:text-base lg:text-lg xl:text-2xl leading-8 w-full sm:w-auto">
                    Performance
                    <br />
                    Marketing, SEO & Brand Design
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-5 lg:col-span-4">
              <div className="relative">
                <Image
                  src={NiceToMeetImg}
                  alt="Nice to Meet you Image"
                  className="object-contain absolute top-[-30px] lg:top-0 left-small left-1/5 sm:left-[-20px] lg:left-0"
                />
                <Image
                  src={HeroImg}
                  alt="Hero Image"
                  className="object-contain mx-auto sm:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[120px]" id="about">
        <div className="max-width">
          <div className="flex mb-5">
            <span className="block px-5 py-2.5 rounded-[25px] text-sm sm:text-base bg-[#F6F7FF] border border-[#686DFD] !font-bricolage">
              NICE TO MEET YOU!
            </span>
          </div>
          <div className="grid gap-10 md:grid-cols-12 mb-[60px]">
            <div className="md:col-span-7">
              <h2 className="text-2xl leading-[36px] sm:text-[40px] font-semibold sm:leading-[52px] text-[#101015]">
                I help startups make effective digital marketing decisions at
                every stage of the product life cycle, from introduction to the
                growth phase.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="!font-bricolage text-lg leading-[28px] text-[#454545] mb-[30px]">
                I&apos;m a results-driven Digital Marketing Specialist with 1
                year of experience helping brands grow through targeted Facebook
                Ads, Google Ads, YouTube SEO, and Social Media Marketing. I
                create high-converting campaigns and eye-catching visuals using
                Photoshop and Canva to boost engagement, leads, and brand
                visibility.
              </p>
              <Link
                href={"#"}
                className="text-sm sm:text-lg text-white font-medium px-8 py-4 rounded-[30px] bg-[#101015] border border-[#101015] hover:bg-transparent hover:text-[#101015] duration-300"
              >
                Download CV
              </Link>
            </div>
          </div>
          <div className="px-[30px] py-10 rounded-[20px] bg-[#F7F7F7] flex flex-wrap md:flex-nowrap justify-between gap-[30px]">
            <div className="w-full md:w-auto">
              <h2 className="text-lg sm:text-[22px] font-semibold text-[#101015] mb-[15px]">
                Understanding client needs
              </h2>
              <p className="text-[#454545] leading-[24px]">
                I craft custom marketing strategies based on business goals,
                audience behavior, and market trends.
              </p>
            </div>
            <div className="w-full md:w-px h-px md:h-[100px] rounded-[2px] bg-[#B5B5B5] flex mt-2">
              <div className="w-1/2 md:w-full h-full md:h-1/2 bg-[#454545] rounded-[2px]"></div>
            </div>
            <div className="w-full md:w-auto">
              <h2 className="text-lg sm:text-[22px] font-semibold text-[#101015] mb-[15px]">
                Quality and attention to detail
              </h2>
              <p className="text-[#454545] leading-[24px]">
                I optimize campaigns with analytics, A/B testing, and tracking
                to maximize ROI across platforms.
              </p>
            </div>
            <div className="w-full md:w-px h-px md:h-[100px] rounded-[2px] bg-[#B5B5B5] flex mt-2">
              <div className="w-1/2 md:w-full h-full md:h-1/2 bg-[#454545] rounded-[2px] ml-auto md:ml-0 md:mt-auto"></div>
            </div>
            <div className="w-full md:w-auto">
              <h2 className="text-lg sm:text-[22px] font-semibold text-[#101015] mb-[15px]">
                Innovative digital design solutions
              </h2>
              <p className="text-[#454545] leading-[24px]">
                We use Facebook Ads, Google Ads, YouTube SEO, and social media
                marketing to drive brand growth and boost engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#101015] text-white py-20 mt-[100px]"
        id="services"
      >
        <div className="max-width">
          <div className="flex flex-wrap md:flex-nowrap items-start md:gap-10">
            <div className="w-full md:w-1/2">
              <div className="flex mb-5">
                <span className="px-5 py-2.5 text-sm sm:text-base border border-[#484848] bg-[#1E1E1E] rounded-[25px] !font-bricolage">
                  WHAT I DO
                </span>
              </div>
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-[64px]">
                Industries
              </h1>
              <p className="text-[#B7B7B5] leading-[24px] mt-[15px] mb-[30px]">
                I am passionate about designing and developing straightforward
                and honest products that enhance people&apos;s lives, achieved
                through teamwork. With more than five years of experience in
                digital product design, my focus is primarily on complex
                products and robust design systems.
              </p>
              <Link
                href={"#"}
                className="rounded-[30px] bg-white border border-[#5F5C58] hover:bg-[#5F5C58] hover:text-white duration-300 px-8 py-2.5 sm:py-4 font-medium text-sm sm:text-lg text-[#101015] inline-block"
              >
                Let&apos;s Talk a Project
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              {servicesData.map(({ desc, id, name, tags }) => (
                <ServiceCard
                  desc={desc}
                  id={id}
                  name={name}
                  tags={tags}
                  key={id}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-[100px]" id="pricing">
        <div className="max-width">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[64px] text-center">
            Expertise
          </h1>
          <p className="leading-6 mt-5 mb-10 text-center">
            My diverse digital marketing background empowers me to turn
            strategic goals <br className="hidden md:block" /> into measurable
            outcomes, consistently delivering value and maximizing{" "}
            <br className="hidden md:block" /> business growth.
          </p>
          <Expertise />
        </div>
      </section>
      <section className="py-20 bg-[#101015]" id="portfolio">
        <div className="max-width">
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[64px] text-center">
            My Recent Projects
          </h1>
          <p className="text-[#B7B7B5] md:text-lg leading-7 mt-5 mb-10 text-center">
            I am continually eager to take on new challenges, collaborating with{" "}
            <br className="hidden md:block" />
            individuals and companies to bring their product ideas to life.
          </p>
          <Portfolio />
        </div>
      </section>
      <section className="py-20 sm:py-[100px]">
        <div className="max-width">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[64px]">
            Testimonials
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10 mt-5 sm:mt-10 mb-10 sm:mb-[120px]">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <TestimonialCard />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Gallery />
        </div>
      </section>
      <Footer />
    </>
  );
}
