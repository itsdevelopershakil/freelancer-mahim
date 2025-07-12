"use client";

import { useState } from "react";

const Portfolio = () => {
  const [selectedService, setSelectedService] = useState("facebook_ads");
  const services = [
    { label: "Facebook Ads", value: "facebook_ads" },
    { label: "Youtube SEO", value: "youtube_seo" },
    { label: "Google Ads", value: "google_ads" },
    { label: "Thumbnail Design", value: "thumbnail_design" },
    { label: "Canva Design", value: "canva_design" },
  ];
  return (
    <>
      <div className="flex justify-center">
        <ul className="flex items-center rounded-[35px] border border-[#B7B7B5] gap-2.5 p-2.5 w-auto">
          {services.map((service, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => setSelectedService(service.value)}
                className={`hover:bg-[#F8F9FA] ${
                  service.value === selectedService
                    ? "bg-[#F8F9FA] text-[#1D1D1D]"
                    : "text-[#B7B7B5]"
                } px-5 py-2.5 rounded-[25px] hover:text-[#1D1D1D] duration-300 cursor-pointer`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
