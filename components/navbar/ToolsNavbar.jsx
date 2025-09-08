"use client";
import React from "react";
import { useShareData } from "@/context/ShareDataContext";
import { navBar } from "@/data/navBar";
import Link from "next/link";
import Image from "next/image";

const ToolsNavbar = ({ navbarStyle }) => {
  const { toggleSearchPopup, toggleMenuPopup } = useShareData();
  const style_1 = (
    <ul className="nav-bar-tools flex items-center justify-between">
      <li className="item">
        <span className="search-icon open" onClick={toggleSearchPopup}>
          <i className="fas fa-search"></i>
        </span>
      </li>
      <li className="item phone">
        <div className="nav-bar-contact">
          <i className="flaticon-emergency-call"></i>
          <div className="content-box">
            <span>{navBar.tools.content.label}</span>
            <Link href={navBar.tools.content.telLink}>
              {navBar.tools.content.phone}
            </Link>
          </div>
        </div>
      </li>
      <li className="item">
        <span className="menu-icon open" onClick={toggleMenuPopup}>
          <i className="fas fa-list"></i>
        </span>
      </li>
    </ul>
  );

  const style_2 = (
    <ul className="nav-bar-tools flex items-center justify-between">
      <li className="item">
        <span className="search-icon open" onClick={toggleSearchPopup}>
          <i className="fas fa-search"></i>
        </span>
      </li>
      <li className="item">
        <span className="menu-icon open" onClick={toggleMenuPopup}>
          <i className="fas fa-list"></i>
        </span>
      </li>
      <li className="item cart">
        <span className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
        <div className="cart-popup">
          {navBar.tools.cartPopup.items.map((item, index) => (
            <div key={`cartPopup ${index}`} className="item">
              <Image
                height={50}
                width={50}
                className="img-fluid"
                src={item.image.src}
                alt={item.image.alt}
              />
              <div className="item-content">
                <div>{item.name}</div>
                <span>
                  {item.quantity} x $ {item.price}
                </span>
              </div>
              <span className="delete-item">x</span>
            </div>
          ))}
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>$ {navBar.tools.cartPopup.subtotal}</span>
          </div>
          <div className="button-cart">
            <Link href="/shop" className="btn-1 btn-2">
              View Cart
            </Link>
            <Link href="/shop" className="btn-1">
              Checkout
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );

  const style_3 = (
    <ul className="nav-bar-tools flex items-center justify-between">
      <li className="item">
        <span className="menu-icon open" onClick={toggleMenuPopup}>
          <i className="fas fa-list"></i>
        </span>
      </li>
      <li className="item btn">
        <Link className="btn-1" href="/appointment">
          Get an appointment
        </Link>
      </li>
      <li className="item cart">
        <span className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
        <div className="cart-popup">
          {navBar.tools.cartPopup.items.map((item, index) => (
            <div key={`cartPopup ${index}`} className="item">
              <Image
                width={50}
                height={50}
                className="img-fluid"
                src={item.image.src}
                alt={item.image.alt}
              />
              <div className="item-content">
                <div>{item.name}</div>
                <span>
                  {item.quantity} x $ {item.price}
                </span>
              </div>
              <span className="delete-item">x</span>
            </div>
          ))}
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>$ {navBar.tools.cartPopup.subtotal}</span>
          </div>
          <div className="button-cart">
            <Link href="/shop" className="btn-1 btn-2">
              View Cart
            </Link>
            <Link href="/shop" className="btn-1">
              Checkout
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );

  return (
    <>
      {navbarStyle === 1 ? style_1 : null}
      {navbarStyle === 2 ? style_2 : null}
      {navbarStyle === 3 ? style_3 : null}
    </>
  );
};

export default ToolsNavbar;
