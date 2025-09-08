"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import ModalImagePopup from "@/components/common/ModalImagePopup";
import ModalYoutubeVideo from "@/components/common/ModalYoutubeVideo";

const ShareDataContext = createContext({
  openNavbarLinks: false,
  toggleNavbarLinks: () => {},
  openSearchPopup: false,
  toggleSearchPopup: () => {},
  showImagePopupHandel: (name = "", url = "") => {},
  showYoutubeVideoUrlHandel: (url = "") => {},
});

export const ShareDataProvider = ({ children }) => {
  const [openNavbarLinks, setOpenNavbarLinks] = useState(false);
  const [openSearchPopup, setOpenSearchPopup] = useState(false);
  const [openMenuPopup, setOpenMenuPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [imagePopup, setImagePopup] = useState({ name: "", url: "" });
  const [isModalYoutubeVideo, setIsModalYoutubeVideo] = useState(false);
  const [youtubeVideoUrl, setYoutubeVideoUrl] = useState("");

  const toggleNavbarLinks = () => {
    setOpenNavbarLinks(!openNavbarLinks);
  };
  const toggleSearchPopup = () => {
    setOpenSearchPopup(!openSearchPopup);
  };
  const toggleMenuPopup = () => {
    setOpenMenuPopup(!openMenuPopup);
  };
  const showImagePopupHandel = (name, url) => {
    setImagePopup({ name, url });
    setShowImagePopup(true);
  };
  const showYoutubeVideoUrlHandel = (url) => {
    setYoutubeVideoUrl(url);
    setIsModalYoutubeVideo(true);
  };
  useEffect(() => {
    const importWow = async () => {
      const { WOW } = await import("wowjs");
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();
    };
    importWow();
  }, []);

  return (
    <ShareDataContext.Provider
      value={{
        openNavbarLinks,
        toggleNavbarLinks,
        openSearchPopup,
        toggleSearchPopup,
        openMenuPopup,
        toggleMenuPopup,
        showImagePopupHandel,
        showYoutubeVideoUrlHandel,
      }}
    >
      {children}
      <ModalImagePopup
        open={showImagePopup}
        name={imagePopup.name}
        url={imagePopup.url}
        close={() => setShowImagePopup(false)}
      />
      <ModalYoutubeVideo
        open={isModalYoutubeVideo}
        close={() => setIsModalYoutubeVideo(!isModalYoutubeVideo)}
        url={youtubeVideoUrl}
      />
    </ShareDataContext.Provider>
  );
};

export const useShareData = () => {
  const context = useContext(ShareDataContext);
  return context;
};
