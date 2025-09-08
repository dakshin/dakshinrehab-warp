import React from "react";

const ContentProvide = ({ data, delay }) => {
  return (
    <div
      className="provide-content-box wow fadeInUp bg-white rounded-lg p-6 h-full flex flex-col min-h-[220px] transition-all duration-300 hover:shadow-lg"
      data-wow-delay={delay}
    >
      {/* Header row: icon and title on the same line */}
      <div className="flex items-center gap-3 mb-3">
        <i className={`${data.icon} text-3xl text-dakshin-accent`}></i>
        <h4
          className="text-[22px] leading-[1.4] font-bold text-dakshin-primary capitalize"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      </div>

      {/* Body text */}
      <div className="content-box flex-1">
        <p className="text-gray-700 text-sm leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ContentProvide;
