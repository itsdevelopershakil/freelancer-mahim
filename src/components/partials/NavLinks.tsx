"use client";

import { useState } from "react";

const sections = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Pricing", id: "pricing" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

const NavLinks = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleClick = (id: string) => {
    setActiveTab(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="flex items-center bg-[#F5F6FF] rounded-[30px] p-[2px] mx-auto">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => handleClick(section.id)}
          className={`rounded-[20px] px-4 py-2 font-medium text-[#101015] transition ${
            activeTab === section.id ? "bg-white" : "bg-transparent"
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
