import React from "react";

const ModalYoutubeVideo = ({ open, close, url }) => {
  return (
    <div className={`modal-youtube-video ${open && "active"}`} onClick={close}>
      <div onClick={(event) => event.stopPropagation()} className="inner-box">
        {open && <iframe src={url}></iframe>}
      </div>
      <span className="exit">
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};

export default ModalYoutubeVideo;
