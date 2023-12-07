import React from "react";
import "./AboutMe.css";
import ProfilePic from "../../assets/profile-picture.webp";
import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/light-linkedin.svg";
import TwitterIcon from "../../assets/icons/light-twitter.svg";

function AboutMe(): React.ReactElement {
  return (
    <div className="about-container">
      <h1 className="about-header">
        ABOUT ME <span className="about-underline" />
      </h1>
      <div className="about-content">
        <div className="social-links-container">
          <div className="social-links-content">
            <img
              src={ProfilePic}
              alt="Profile picture"
              className="profile-pic"
            />
            <ul className="social-list">
              {/* Make it dynamically after firebase setup and integration */}
              <li className="social-item">
                <img src={TwitterIcon} alt="twitter link" />
              </li>
              <li className="social-item">
                <img src={LinkedinIcon} alt="linkedin link" />
              </li>
              <li className="social-item">
                <img src={GithubIcon} alt="github link" />
              </li>
            </ul>
          </div>
        </div>
        <div className="about-personal-info">
          <h2 className="about-presentation">I'M MICHEL BRAVO</h2>
          <h3 className="about-subtitle">
            A WEB <span>DEVELOPER</span> AND UI <span>DESIGNER</span> BASED ON{" "}
            <span>UNITED STATES</span>
          </h3>
          <p className="about-description">
            I have rich experience in web site design and building and
            customization, also I am good at React.js, Vue.js, Angular.js,
            Node.js, PHP, Laravel, WordPress, HTML, CSS, SASS, LESS, Bootstrap,
            jQuery, Javascript, etc. I love to talk with you about our unique.
          </p>
          <div className="personal-data-container">
            <div className="side-left">
              <p className="personal-info">
                <span>Birthday:</span> 12th December 1996
              </p>
              <p className="personal-info">
                <span>Residence:</span> Lake Charles, LA, United States
              </p>
              <p className="personal-info">
                <span>Email:</span> mbravosarria@gmail.com
              </p>
            </div>
            <div className="side-right">
              <p className="personal-info">
                <span>Phone:</span> +1 (337) 292-4674
              </p>
              <p className="personal-info">
                <span>Freelance:</span> Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
