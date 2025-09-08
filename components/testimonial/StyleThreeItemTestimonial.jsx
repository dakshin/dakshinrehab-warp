import React from "react";

const StyleThreeItemTestimonial = ({ data }) => {
  return (
    <div className="testimonial-carousel-item">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/3 px-3">
          <div
            className="item-img"
            style={{
              backgroundImage:
                `url(${data.img})`,
            }}
          ></div>
        </div>
        <div className="w-full md:w-2/3 px-3">
          <div className="item-text">
            <i className="quote flaticon-left-quote"></i>
            <div className="content-text-box">
              {data.quote}
            </div>
            <div className="testimonial-doctor">
              <h4>{data.author.name}</h4>
              <span>{data.author.specialty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleThreeItemTestimonial;
