import Link from "next/link";
import React from "react";

const FactArea = () => {
  return (
    <section className="fact-area py-100">
      <div className="overlay overlay-2"></div>
      <div className="container mx-auto px-4">
        <div className="sec-title text-center">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-5/6 md:mx-auto px-3">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Need Expert Physiotherapy or Rehabilitation?
              </h2>
              <h3 className="wow fadeInUp" data-wow-delay=".5s">
                Book Your Appointment Today
              </h3>
              <p className="sec-explain wow fadeInUp" data-wow-delay=".7s">
                DakshinRehab provides specialized physiotherapy, neuro rehab, pediatric rehabilitation, vascular therapy, and prosthetics & orthotics. Our certified therapists deliver personalized care to help you regain mobility, strength, and confidence.
              </p>
              <Link
                className="btn-1 btn-3 sec-btn wow fadeInUp"
                data-wow-delay=".9s"
                href="/appointment-2"
              >
                Get an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactArea;
