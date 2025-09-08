import Link from "next/link";
import React from "react";
import AnimatedText from "./AnimatedText";

const SecTitle = ({
  style = 1,
  title,
  subTitle,
  description,
  button,
  navbarStyle = 1,
}) => {
  const styleBox = (
    <div
      className={
        navbarStyle === 1
          ? "sec-title"
          : navbarStyle === 2
          ? "sec-title sec-title-2"
          : navbarStyle === 3
          ? "sec-title sec-title-3"
          : null
      }
    >
      <div className="flex flex-wrap -mx-3">
        <div className="w-full lg:w-5/12 px-3">
          {subTitle && <h2 className="splt-txt wow"><AnimatedText text={subTitle} /></h2>}
          {title && <h3 className="splt-txt wow"><AnimatedText text={title} /></h3>}
        </div>
        <div className="w-full lg:w-5/12 px-3">
          {description && <p className="sec-explain splt-txt wow"><AnimatedText text={description} /></p>}
          {button && (
            <Link
              aria-label={button.text}
              className={`wow fadeInUp ${button.className ? button.className : "btn-1 sec-btn"}`}
              data-wow-delay=".3s"
              href={button.href}
            >
              {button.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
  const styleBox_2 = (
    <div
      className={
        navbarStyle === 1
          ? "sec-title"
          : navbarStyle === 2
          ? "sec-title sec-title-2"
          : navbarStyle === 3
          ? "sec-title sec-title-3"
          : null
      }
    >
      {subTitle && <h2 className="splt-txt wow"><AnimatedText text={subTitle} /></h2>}
      {title && <h3 className="splt-txt wow"><AnimatedText text={title} /></h3>}
      {description && <p className="sec-explain splt-txt wow"><AnimatedText text={description} /></p>}
    </div>
  );
  return style === 1 ? styleBox : style === 2 ? styleBox_2 : null;
};

export default SecTitle;
