"use client";

import { PortfolioCategory, portfolioData } from "@/constants/portfolioData";
import { Fragment, useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [selectedService, setSelectedService] =
    useState<PortfolioCategory>("facebook_ads");
  const services: { label: string; value: PortfolioCategory }[] = [
    { label: "Facebook Ads", value: "facebook_ads" },
    { label: "Youtube SEO", value: "youtube_seo" },
    { label: "Google Ads", value: "google_ads" },
    { label: "Thumbnail Design", value: "thumbnail_design" },
    { label: "Canva Design", value: "canva_design" },
  ];

  const items = selectedService ? portfolioData[selectedService] : [];
  return (
    <>
      <div className="flex justify-center">
        <ul className="flex flex-wrap md:flex-nowrap justify-center items-center rounded-[35px] border border-[#B7B7B5] gap-2.5 p-2.5 w-auto">
          {services.map((service, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => setSelectedService(service.value)}
                className={`hover:bg-[#F8F9FA] ${
                  service.value === selectedService
                    ? "bg-[#F8F9FA] text-[#1D1D1D]"
                    : "text-[#B7B7B5]"
                } px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base rounded-[25px] hover:text-[#1D1D1D] duration-300 cursor-pointer`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 xl:gap-10">
        {items.map((item, i) => (
          <Fragment key={i}>
            <PortfolioCard data={item} />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
