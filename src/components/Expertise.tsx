import { expertiseData } from "@/constants/expertiseData";
import { Fragment } from "react";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <div className="mt-10 grid gap-5 sm:gap-10">
      {expertiseData.map((item, i) => (
        <Fragment key={i}>
          <ExpertiseCard data={item} />
        </Fragment>
      ))}
    </div>
  );
};

export default Expertise;
