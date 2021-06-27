import React from "react";
import "./Footer.css";
import Location from "../../Images/Location.png";
import Email from "../../Images/Email.png";
import Phone from "../../Images/Phone.png";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="ContactUs">
        <h3 className="ContactHeader">Contact Us</h3>
        <div className="ContactLocation">
          <img src={Location} alt="Location" className="LocationImg"></img>
          <p className="ContactOption">Lorem Ipsum</p>
        </div>
        <div className="ContactEmail">
          <img src={Email} alt="Email" className="EmailImg"></img>
          <p className="ContactOption">Lorem Ipsum</p>
        </div>
        <div className="ContactPhone">
          <img src={Phone} alt="Phone" className="PhoneImg"></img>
          <p className="ContactOption">+64 000 0000</p>
        </div>
      </div>
      <div className="FooterCircles">
        <div className="FooterCircle"></div>
        <div className="FooterCircle CenterCircle"></div>
        <div className="FooterCircle"></div>
      </div>
      <div className="Subscribe">
        <h3 className="SubscribeHeading">
          Join our community and stay up to date
        </h3>
        <p className="SubscribeSubheading">Your Email</p>
        <input
          id="SubscribeEmail"
          placeholder="Enter Your Email"
          className="SubscribeInput"
        ></input>
        <div className="SubscribeBtnContainer">
          <a href="/" className="link">
            <h2 className="SubscribeBtn">Subscribe</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
