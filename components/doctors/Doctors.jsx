import React from "react";
import { doctorsData } from "@/data/doctors";
import SecTitle from "../common/SecTitle";
import ItemDoctors from "./ItemDoctors";

const Doctors = ({ navbarStyle = 1 }) => {
  return (
    <section className="doctors py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          navbarStyle={navbarStyle}
          title={doctorsData.title}
          subTitle={doctorsData.subtitle}
          description={doctorsData.description}
          button={doctorsData.button}
        />
        <div className="flex flex-wrap -mx-3">
          {doctorsData.doctors.map((item, index) => (
            <div key={item.name} className="w-full md:w-1/2 lg:w-1/3 px-3">
              <ItemDoctors data={item} delay={`${0.3 + index * 0.1}s`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
