import React from "react";

const StyleTwoItemFeatures = ({ data, index }) => {
  return (
    <div className="features-item bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
          <i className={`features-icon ${data.icon} text-3xl text-[#1a3d7d]`}></i>
        </div>
        <div className="item-text flex-1">
          <h4 className="text-lg font-semibold text-[#1a3d7d] mb-3 font-['Rajdhani']">{data.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed font-['Public_Sans']">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default StyleTwoItemFeatures;
