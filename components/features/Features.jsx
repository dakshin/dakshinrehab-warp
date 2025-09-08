import React from "react";
import { featuresData } from "@/data/features";
import ItemFeatures from "./ItemFeatures";

const Features = () => {
  return (
    <section className="features">
      <div className="container mx-auto px-4">
        <div className="row all-features-item">
          {featuresData.map((item, index) => (
            <div key={item.title} className="col-lg-4 padding-0">
              <ItemFeatures
                data={item}
                delay={`${0.3 + index * 0.1}s`}
                index={
                  index === 0
                    ? "one"
                    : index === 1
                    ? "two"
                    : index === 2
                    ? "three"
                    : null
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
