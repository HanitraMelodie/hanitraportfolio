import React from "react";
import "./DefaultPagestyle.css";
import logo from ".././images/profilepicture.svg";
import Card from "react-bootstrap/Card";
import logoweatherapp from ".././images/weatherapp.png";
import logomusictherapy from ".././images/musictherapy.png";

function ProjectPage() {
  return (
    <div className="page-container">
      <div className="introsection">
        <img src={logo} alt="" className="hero" />
        <section>
          <p>Please find below my personal hosted projects.</p>
        </section>
      </div>
      <div className="page-content">
        <Card className="Card">
          <a
            href="https://weatherapplicationv2.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img className="Card" variant="top" src={logoweatherapp} />
          </a>
          <Card.Body>
            <Card.Title>Weather app</Card.Title>
            <Card.Text>
              This website is indicated the weather and forecast for the next 5
              days based on your location
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="Card">
          <a
            href="https://musictherapy.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <Card.Img className="Card" variant="top" src={logomusictherapy} />
          </a>
          <Card.Body>
            <Card.Title>Music therapy app</Card.Title>
            <Card.Text>
              This website is helping you to relax through music: karaoke,
              dance, relaxing music and quizzes
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProjectPage;
