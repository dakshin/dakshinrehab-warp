"use client";
import React, { useState } from "react";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name) {
      alert("Please Enter Your Name");
      return;
    }
    if (!formData.email) {
      alert("Please Enter Your Email Address");
      return;
    }
    if (!formData.subject) {
      alert("Please Enter Your subject");
      return;
    }
    if (!formData.message) {
      alert("Please Enter Your Message");
      return;
    }
    console.log("Form Data Submitted:", formData);
  };
  return (
    <div className="add-comments">
      <div className="inner-add-comments">
        <div className="flex flex-wrap -mx-3">
          <div className="col-md-6 inner-add-comments-box">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 inner-add-comments-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 inner-add-comments-box">
            <input
              type="text"
              name="subject"
              placeholder="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 inner-add-comments-box">
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message Here "
            ></textarea>
          </div>
          <div className="col-md-12 inner-add-comments-box last">
            <button
              onClick={handleSubmit}
              className="btn-1"
              style={{ border: "none" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContact
