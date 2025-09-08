import React from "react";

const ItemTestimonial = ({ data }) => {
  return (
    <div className="testimonial-carousel-item">
      <i className="quote flaticon-left-quote"></i>
      <div className="content-text-box">
        {data.quote}
      </div>
      <div className="testimonial-doctor">
        <h4>{data.author.name}</h4>
        <span>{data.author.specialty}</span>
      </div>
    </div>
  );
};

export default ItemTestimonial;
