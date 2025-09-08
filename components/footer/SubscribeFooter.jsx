"use client";
import React, { useState } from "react";

const SubscribeFooter = () => {
  const [subscribeForm, setSubscribeForm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!subscribeForm) {
      alert("Please Enter Your Email Address");
      return;
    }
    console.log("subscribeForm", subscribeForm);
  };
  return (
    <div className="newsletter">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 flex items-center justify-start wow fadeInUp" data-wow-delay="0.3s">
            <h5>Subscribe to our newsletter</h5>
          </div>
          <div className="w-full md:w-1/2 px-3 flex items-center justify-end wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={handleSubmit} className="flex w-full max-w-md h-14 bg-gray-100 border-2 border-gray-100 rounded-md overflow-hidden shadow-sm">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address...."
                value={subscribeForm}
                onChange={(event) => {
                  setSubscribeForm(event.target.value);
                }}
                required
                className="flex-1 border-none bg-transparent px-4 py-3 text-sm text-gray-700 placeholder-blue-500 focus:outline-none focus:ring-0"
              />
              <button 
                type="submit" 
                onClick={handleSubmit}
                className="w-32 h-full border-none bg-blue-500 text-white text-sm font-semibold cursor-pointer transition-colors duration-300 hover:bg-blue-600 active:bg-blue-700 px-5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeFooter;
