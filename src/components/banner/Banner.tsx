import React, { useState, useEffect } from "react";
import "./Banner.css";
import PhoneBannerImg from "../../assets/images/phone-banner.webp";
import DesktopBannerImg from "../../assets/images/desk-banner.webp";
import BannerContent from "./content/BannerContent";

function Banner(): React.ReactElement {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <BannerContent />
      </div>
      {windowWidth <= 520 ? (
        <img src={PhoneBannerImg} alt="Phone banner" className="banner-img" />
      ) : (
        <img
          src={DesktopBannerImg}
          alt="Desktop banner"
          className="banner-img"
        />
      )}
    </div>
  );
}

export default Banner;
