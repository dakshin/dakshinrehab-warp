import Image from "next/image";
import React, { useEffect } from "react";

const ModalImagePopup = ({ open, close, url, name = "Image Name" }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  return (
    <div className={`modal-youtube-video ${open && "active"}`} onClick={close}>
      <div onClick={(event) => event.stopPropagation()} className="inner-box">
        {open && (
          <Image
            src={url}
            alt={name}
            width={600}
            height={600}
            style={{ margin: "0 auto" }}
          />
        )}
      </div>
      <span className="exit">
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};

export default ModalImagePopup;
