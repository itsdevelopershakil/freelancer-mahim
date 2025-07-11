const TestimonialCard = () => {
  return (
    <div className="w-full bg-white border border-[#DFDFDF] p-4 rounded-[15px] flex flex-col gap-[30px] justify-between font-bricolage">
      <p className="text-[#454545] text-sm sm:text-base leading-[26px]">
        Artfolio has been an invaluable tool for me as a UX/UI consultant. The
        platform&apos;s flexibility and customization options allowed me to
        create a portfolio that reflects both my UX and UI design expertise.
      </p>
      <div className="flex items-center gap-6">
        <h2 className="font-semibold text-sm sm:text-base xl:text-lg leading-[26px]">
          Rick Bossenbroek
        </h2>
        <p className="text-[#454545] text-sm sm:text-base xl:text-lg leading">
          Founder Uncode
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
