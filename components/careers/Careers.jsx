import React from "react";
import { careersData } from "@/data/careers";
import ItemCareers from "./ItemCareers";

const Careers = () => {
  return (
    <div className="careers py-100-70">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          {careersData.map((item) => (
            <div key={item.title} className="w-full md:w-1/2 lg:w-1/3 px-3">
              <ItemCareers data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
