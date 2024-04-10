import React from "react";
import logo from ".././images/profilepicture.svg";
import "./DefaultPagestyle.css";

function ContactPage() {
  return (
    <div className="page-container">
      <div className="introsection">
        <img src={logo} alt="" className="hero" />

        <section className="contactsection">
          <h1>Feel free to contact me 👋: </h1>
          <p>
            <a href="mailto:hanitrar5@gmail.com">By email </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/hanitra-rakotoarimanana-2b171596/">
              On Linkedin
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
