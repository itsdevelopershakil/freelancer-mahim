import { ExpertiseDataType } from "@/constants/expertiseData";

type ExpertiseCardProps = {
  data: ExpertiseDataType;
};

const ExpertiseCard = ({ data }: ExpertiseCardProps) => {
  return (
    <div className="p-4 sm:p-[30px] rounded-[20px] bg-white border border-[#DFDFDF] hover:bg-[#F7F7F7] hover:border-[#F7F7F7] duration-300">
      <div className="flex justify-between items-center gap-2.5">
        <h1 className="text-[#101015] font-semibold text-lg md:text-2xl lg:text-4xl lg:leading-11">
          {data.title}
        </h1>
        <div className="flex items-center gap-2.5">
          <p className="text-[#454545] text-sm lg:text-lg leading-6 font-medium">
            FROM
          </p>
          <span className="text-[#101015] text-lg md:text-2xl lg:text-4xl font-semibold">
            ${data.price}/{data.service}
          </span>
        </div>
      </div>
      <ul className="mt-5 grid gap-[15px] list-disc pl-4 sm:pl-5">
        {data.bulletPoints.map((item, i) => (
          <li
            key={i}
            className="text-[#454545] text-sm md:text-base lg:font-medium leading-5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertiseCard;
