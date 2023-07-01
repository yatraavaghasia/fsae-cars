import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/images/logo.png" alt="Logo" />
        <h1>Phoenix Racing</h1>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>
            <img src="/images/phone.jpg" alt="Phone" />
            <a href="tel:+919999999999">+91 999 9999 999</a>
          </p>
          <p>
            <img src="/images/mail.png" alt="Mail" />
            <a href="mailto:example@example.com">example@example.com</a>
          </p>
          <div className="logos">
            <a href="https://www.linkedin.com">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.twitter.com">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>

            <a href="https://www.facebook.com">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="address">
        <h1>ADDRESS</h1>
        <div className="address-text">
          <img src="/images/map-pin.png" alt="Map Pin" />
          <a
            href="https://www.google.com/maps?q=SVNIT+Surat,+Gujarat,+India"
            target="_blank"
            rel="noreferrer"
          >
            IC Engine Lab,
            <br />
            SVNIT Campus,
            <br />
            Ichchhanath,
            <br />
            Surat - 395007
            <br />
            Gujarat, India
          </a>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Map"
          width="100%"
          height="200"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.229146965716!2d72.7849!3d21.1636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958258ef4579a2b%3A0x892c392f388d64c5!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%20(SVNIT)%2C%20Surat!5e0!3m2!1sen!2sin!4v1624912431262!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
}
