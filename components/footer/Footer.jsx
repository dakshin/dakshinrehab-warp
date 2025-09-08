import React from "react";
import SubscribeFooter from "./SubscribeFooter";
import { footerData } from "@/data/footer";
import IconFollow from "../common/IconFollow";
import CopyrightFooter from "./CopyrightFooter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <SubscribeFooter />
      <div className="footer-content">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="logo">
                <Image
                  className="img-fluid"
                  src={footerData.logo.src}
                  alt={footerData.logo.alt}
                  width={200}
                  height={50}
                />
                <p>{footerData.logo.description}</p>
                <IconFollow
                  className="footer-icon"
                  followData={footerData.socialLinks}
                />
              </div>
            </div>
            {footerData.quickLinks && (
              <div className="w-full sm:w-1/2 lg:w-1/6 px-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="footer-title">
                  <h4>Quick Link</h4>
                </div>
                <ul className="links">
                  {footerData.quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {footerData.helpLinks && (
              <div className="w-full sm:w-1/2 lg:w-1/6 px-3 wow fadeInUp" data-wow-delay="0.7s">
                <div className="footer-title">
                  <h4>Help Links</h4>
                </div>
                <ul className="links">
                  {footerData.helpLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {footerData.openingHours && (
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 wow fadeInUp" data-wow-delay="0.9s">
                <div className="footer-title">
                  <h4>Open - Closed Time</h4>
                </div>
                <ul className="opening-hours">
                  {footerData.openingHours.map((item) => (
                    <li key={item.day}>
                      {item.day}
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </footer>
  );
};

export default Footer;
