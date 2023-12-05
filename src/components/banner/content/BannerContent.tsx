import React from "react";
import "./BannerContent.css";

function BannerContent(): React.ReactElement {
  return (
    <div className="banner-content-container">
      <p>
        <span className="banner-light-content">Hello</span> My name is
      </p>
      <h2 className="banner-name">Michel Bravo Sarria</h2>
      <h3 className="banner-title">Web Developer | UI Designer</h3>
      <a href="" className="banner-download">
        Download CV
      </a>
    </div>
  );
}

export default BannerContent;
