import React, { useState } from "react";
import NiceSelect from "../common/NiceSelect/NiceSelect";

const Quote = ({ className = "quote-box form-contact" }) => {
  const [formQuote, setFormQuote] = useState({
    name: "",
    email: "",
    phone: "",
    doctors: "",
    departments: "",
    date: "",
    time: "",
  });

  const handleChange = (event) => {
    setFormQuote({ ...formQuote, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formQuote.name) {
      alert("Please Enter Your Name");
      return;
    }
    if (!formQuote.email) {
      alert("Please Enter Your Email Address");
      return;
    }
    if (!formQuote.phone) {
      alert("Please Enter Your Phone Number");
      return;
    }
    if (!formQuote.doctors) {
      alert("Please Enter Your Doctor Name");
      return;
    }
    if (!formQuote.departments) {
      alert("Please Select Your Departments");
      return;
    }
    if (!formQuote.date) {
      alert("Please Select Your Date");
      return;
    }
    if (!formQuote.time) {
      alert("Please Select Your Time");
      return;
    }
    console.log("Form Quote Submitted:", formQuote);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="sec-title">
        <h3>Make appointment!</h3>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full sm:w-1/2 px-3">
          <div className="quote-item">
            <span className="lable">name*</span>
            <i className="fas fa-file-signature"></i>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formQuote.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <div className="quote-item">
            <span className="lable">Email*</span>
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formQuote.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <div className="quote-item">
            <span className="lable">Phone*</span>
            <i className="fas fa-phone"></i>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={formQuote.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <div className="quote-item">
            <span className="lable">Doctors*</span>
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="doctors"
              placeholder="Doctors"
              required
              value={formQuote.doctors}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full px-3">
          <div className="quote-item">
            <span className="lable">Specility*</span>
            <NiceSelect
              id="departments"
              name="departments"
              placeholder="Select Departments"
              onChange={(value) =>
                setFormQuote({ ...formQuote, departments: value })
              }
            >
              <option value="hemathology">Physiotherapy</option>
              <option value="neurology">Sports Injuries</option>
              <option value="gastroenterology">Neurorehab</option>
              <option value="pulmonology">Prosthetics Orthotics</option>
              <option value="cardiology">Pediatrcian</option>
              <option value="ophthalmology">Vascular & Diabeti foot care</option>
              <option value="orthopedics">Clinical Pilates</option>
              <option value="radiology">Spine Rehabilitation</option>
            </NiceSelect>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <div className="quote-item">
            <span className="lable">Select Date*</span>
            <i className="fas fa-calendar-day"></i>
            <input
              type="date"
              name="date"
              placeholder="Select Date"
              required
              value={formQuote.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-3">
          <div className="quote-item">
            <span className="lable">Select Time*</span>
            <i className="fas fa-clock"></i>
            <input
              aria-labelledby="time"
              type="time"
              name="time"
              required
              value={formQuote.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full px-3">
          <div className="quote-item">
            <button
              className="btn-1"
              type="submit"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Quote;
