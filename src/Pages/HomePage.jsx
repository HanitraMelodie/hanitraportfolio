import React from "react";
import "./DefaultPagestyle.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from ".././images/profilepicture.svg";
import { Tags } from "../components/tags";

function HomePage() {
  return (
    <div className="page-container">
      <div className="introsection">
        <img src={logo} alt="" className="hero" />

        <section>
          <p>Hello everyone 👋</p>
          <p>I am Hanitra (based in Moledo, Portugal).</p>
          <p>
            I am a passionate full-stack developer with a keen focus on
            front-end development (Typescript/React). I am on a journey to
            expand my experiences and skills in web development.
          </p>
        </section>
      </div>

      <Accordion className="Accordion" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="AccordionSummary"
        >
          <h3>Associate Full Stack Developer (Ki insurance 2022-2024)</h3>
        </AccordionSummary>

        <AccordionDetails className="AccordionDetails flow">
          <h4>Ki backend service code migration</h4>
          <p>
            During the migration of the backend service from C# to Kotlin, I was
            tasked with monitoring and updating the E2E tests for Energy, Lawyer
            Professional, and Marine. By expanding the E2E test coverage, I
            uncovered a bug in the Marine Hull business class. This enhancement
            in E2E coverage played a significant role in delivering a
            higher-quality backend codebase during the migration.
          </p>
          <h4>Additional capacity for multiple syndicates feature</h4>

          <p>
            While working on my team tasks, I actively participated in two
            design sprints for the new feature, enabling quoting against two
            additional syndicates. These were early design sessions and
            discussions, and it was crucial for me to be involved as I
            understood how this new feature would significantly impact Ki&apos;s
            business and the insurance industry. I am proud that two of my
            design ideas were incorporated into the final design.
          </p>

          <p>
            In preparation for the launch of the additional capacity from
            multiple syndicates feature, I completed 10 frontend tickets on the
            operation platform to support this new functionality. I also
            increased unit test coverage for the operation platform codebase and
            added new unit tests.
          </p>
          <p>
            To support the new feature, I contributed to the creation of an
            additional partner platform. I implemented the Error Logs Tracker
            Sentry to receive daily error reports on production and demo
            environments for the Ki partner platform. This enhancement improved
            our error tracking capabilities and provided greater visibility into
            error recurrences. I was responsible for reporting and investigating
            errors reported on Sentry. Additionally, I added unit tests and E2E
            test coverage to the partner platform.
          </p>
          <p>
            Recognizing the importance of a better user experience, I initiated
            the creation of a ticket to make the Ki partner platform more
            responsive. Although it was not initially on the JIRA board, I
            recognized its significance as a nice-to-have feature for our
            platform, and thus, I created the ticket and implemented responsive
            design for the Ki partner platform.
          </p>
          <Tags
            items={[
              "Typescript",
              "React",
              "Jest",
              "Cypress",
              "Python",
              "Kotlin",
              "Selenium",
              "UI design",
            ]}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion className="Accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="AccordionSummary"
        >
          <h3>
            Web development Instructor freelance( Code First Girls 2022-present)
          </h3>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails flow">
          <p>
            I am teaching HTML, CSS and Javascript to women and non-binary
            people.
          </p>
          <p>
            Seventy-five women and/or non-binary individuals successfully
            completed my web development classes and received the KickStarter
            web development certificates.
          </p>
          <Tags items={["HTML", "CSS", "Javascript"]} />
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="AccordionSummary"
        >
          <h3>
            Software Engineer Volunteer( Preptrack Foundation 2023-present)
          </h3>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails flow">
          <p>
            I am helping to develop a free React Native application to assist
            people in tracking their PrEP treatment, a method used to prevent
            HIV infection in individuals at high risk of acquiring the virus.
          </p>
          <p>
            I am reviewing and approving pull requests, and I am making changes
            to the codebase based on feedback from users.
          </p>
          <Tags items={["Typescript", "React Native"]} />
        </AccordionDetails>
      </Accordion>

      <Accordion className="Accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="AccordionSummary"
        >
          <h3>Full Stack Developement Student (Code First Girls 2022)</h3>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails flow">
          <h4>Assignments</h4>
          <p>
            I applied for the Full Stack development online course. It was an
            intense three-month programming learning experience, with weekly
            assignments to deliver. The assignments are available{" "}
            <a
              className="homelink"
              href="https://github.com/HanitraMelodie/homework"
            >
              here.
            </a>
          </p>
          <h4>Final project: Music Therapy application</h4>
          <p>
            The final project, showcasing what we learned during the three
            months of classes, was a team effort to create a React application.
            I found the idea of developing a Music Therapy application very
            exciting. Indeed, my teammate and I were passionate about music and
            wanted to create something to help us and others cope with stress in
            a fun and entertaining way. With only two members in our team, it
            was intense to complete this project. I created the initial design
            of the website using Figma{" "}
            <a
              className="homelink"
              href="https://www.figma.com/file/0N1UvXxJ2v8ggADQtvVTKO/CFG-V1-Hanitra?type=design&node-id=0-1&mode=design&t=w8wPDBqW33a2F58q-0"
            >
              here.
            </a>
          </p>
          <p>
            The music therapy application itself offers three different user
            journeys, providing various options for the user. The application is
            hosted{" "}
            <a className="homelink" href="https://musictherapy.netlify.app">
              here.
            </a>
          </p>
          <Tags items={["Javacript", "React", "CSS", "Jest"]} />
        </AccordionDetails>
      </Accordion>

      <Accordion className="Accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="AccordionSummary"
        >
          <h3>Full Stack Developement Student (SheCodes 2022)</h3>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails flow">
          <p>
            During my free time, I enrolled in several online courses on the
            SheCodes platform. The final assignment involved creating a weather
            application using a weather API call. The application is hosted{" "}
            <a
              className="homelink"
              href="https://weatherapplicationv2.netlify.app"
            >
              here.
            </a>
          </p>
          <Tags items={["Javacript", "React", "HTML", "CSS"]} />
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="AccordionSummary"
        >
          <h3>
            Computational Software techniques Master of Sciences(Cranfield
            University 2018)
          </h3>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails flow">
          <p>
            My thesis subject was the analysis of aerodynamic loadings on the
            BMW Z3 model vehicle using Computational Fluid Dynamics. I first
            built the BMW Z3 model vehicle using CATIA, then conducted
            simulations of the aerodynamics around the car using Ansys and
            Autodesk CFD.
          </p>
          <Tags items={["CATIA", "Ansys Workbench", "Autodesk CFD"]} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default HomePage;
