import { useShareData } from "@/context/ShareDataContext";
import { menuData } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconFollow from "../common/IconFollow";

const InnerMenu = () => {
  const { toggleMenuPopup } = useShareData();
  return (
    <>
      <div className="website-info">
        <Link href={menuData.websiteInfo.logo.href} className="logo">
          <Image
            height={50}
            width={225}
            className="img-fluid"
            src={menuData.websiteInfo.logo.src}
            alt={menuData.websiteInfo.logo.alt}
          />
        </Link>
        <p>{menuData.websiteInfo.description}</p>
      </div>
      <div className="contact-info">
        <h4>{menuData.contactInfo.title}</h4>
        {menuData.contactInfo.contacts
          .filter((item) => item.type === "phone")
          .map((item, index) => (
            <div key={`contact-box-${index}`} className="contact-box">
              <i className={item.icon}></i>
              <div className="box">
                {item.numbers.map((num, idx) => (
                  <Link
                    key={`phone-${index}-${idx}`}
                    className="phone"
                    href={num.href}
                  >
                    {num.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        {menuData.contactInfo.contacts
          .filter((item) => item.type === "email")
          .map((item, index) => (
            <div key={`contact-box-${index}`} className="contact-box">
              <i className={item.icon}></i>
              <div className="box">
                {item.emails.map((email, idx) => (
                  <Link
                    key={`email-${index}-${idx}`}
                    className="mail"
                    href={email.href}
                  >
                    {email.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}

        {menuData.contactInfo.contacts
          .filter((item) => item.type === "location")
          .map((item, index) => (
            <div key={`contact-box-${index}`} className="contact-box">
              <i className={item.icon}></i>
              <div className="box">
                {item.addresses.map((address, idx) => (
                  <p key={`address-${index}-${idx}`}>{address}</p>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="follow-us">
        <h4>{menuData.followUs.title}</h4>
        <IconFollow
          className="icon-follow"
          followData={menuData.followUs.socialLinks}
        />
      </div>
      <span className="menu-box-icon exit" onClick={toggleMenuPopup}>
        <i className="fas fa-times"></i>
      </span>
    </>
  );
};

export default InnerMenu;
