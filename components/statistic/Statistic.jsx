import React from "react";
import { statisticData } from "@/data/statistic";
import ItemStatistic from "./ItemStatistic";

const Statistic = () => {
  return (
    <div className="statistic">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          {statisticData.map((item, index) => (
            <div key={item.label} className="w-full sm:w-1/2 lg:w-1/4 px-3">
              <ItemStatistic data={item} delay={`${0.3 + index * 0.1}s`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
