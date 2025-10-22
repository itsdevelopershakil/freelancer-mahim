const ServiceCard = ({
  id,
  desc,
  name,
  tags,
}: {
  id: number;
  name: string;
  desc: string;
  tags: string[];
}) => {
  return (
    <div className="mt-10 sm:mt-[60px]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-2xl md:text-[32px] leading-[24px] sm:leading-[32px] md:leading-[40px] font-semibold">
          {name}
        </h2>
        <span className="!font-bricolage font-semibold text-[32px] leading-[40px] text-transparent text-stroke">
          {id}
        </span>
      </div>
      <p className="leading-[24px] text-[#B7B7B5] mt-[15px]">{desc}</p>
      <span className="block h-px w-full bg-[rgba(183,183,181,0.50)] my-5"></span>
      <div className="flex gap-[15px] flex-wrap">
        {tags.map((tag, i) => (
          <button
            key={i}
            className="rounded-[25px] bg-[#1E1E1E] border border-[#484848] px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base text-[#B7B7B5] leading-[20px]"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
