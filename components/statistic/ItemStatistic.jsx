import React from "react";
import CountUp from "../common/CountUp";

const ItemStatistic = ({ delay, data, style = 1 }) => {
  return (
    <div className="statistic-item wow fadeInUp" data-wow-delay={delay}>
      {style === 1 && (
        <>
          {data.icon && <i className={data.icon}></i>}
          <div className="content">
            <div className="statistic-counter">
              <CountUp start={0} end={data.count} duration={2} />
            </div>
            <div className="counter-name">{data.label}</div>
          </div>
        </>
      )}
      {style === 2 && (
        <>
          <div className="statistic-counter">
            <CountUp start={0} end={data.count} duration={2} />
          </div>
          <div className="counter-name">{data.label}</div>
        </>
      )}
    </div>
  );
};

export default ItemStatistic;
