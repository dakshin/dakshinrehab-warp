import React from "react";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <div className="contact-us py-100">
      <div className="container mx-auto px-4">
        <div className="contact-info-content">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 lg:w-1/3 px-3">
              <div className="contact-box">
                <i className="flaticon-call"></i>
                <div className="box">
                  <a className="phone" href="tel:8019299888">
                    80192 99888
                  </a>
                  <a className="phone" href="tel:7075575400">
                    70755 75400
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3">
              <div className="contact-box">
                <i className="flaticon-email"></i>
                <div className="box">
                  <a className="mail" href="mailto:info@dakshinrehab.com">
                    info@dakshinrehab.com
                  </a>
                  <a className="mail" href="mailto:support@dakshinrehab.com">
                    support@dakshinrehab.com
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-3">
              <div className="contact-box">
                <i className="flaticon-location"></i>
                <div className="box">
                  <p>Anjaneya Nagar, Moosapet,</p>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="map-box">
              <iframe
                src="https://maps.google.com/maps?q=Anjaneya+Nagar,+Moosapet,+Hyderabad&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;