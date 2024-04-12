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
            During the backend service migration from C# to Kotlin, I was
            responsible for monitoring and updating the E2E tests for Energy,
            Lawyer Professional and Marine. By increasing the E2E tests
            coverage, I discovered a bug on the Marine Hull business class. This
            E2E coverage improvement was one of the reasons we were able to
            deliver a better-quality backend codebase during the migration.
          </p>
          <h4>Additional capacity for multiple syndicates feature</h4>

          <p>
            While working on my team tasks, I decided to engage with two design
            sprints for the new feature (being able to quote against two
            additional syndicates), it was a very early design sessions and
            discussions. It was essential for me to be involved in these
            discussions as I was aware of how this new feature will drastically
            change Ki business and the insurance business. I am proud that two
            of my designs ideas have been used on the final design.
          </p>
          <p>
            During the preparation of the launch for the additional capacity
            from multiple syndicates feature,I completed 10 front‐end tickets on
            the operation platform to support this new feature.I in unit tests
            coverage for the operation platform codebase and added as well unit
            tests .
          </p>
          <p>
            To support the new feature, I participated to the creation of an
            additional partner platform : I set up Error logs tracker Sentry to
            have daily error reports on production and demo environments on a Ki
            partner platform. It improved the way we track error recurrences and
            gave more visiblity to error reoccurence. I was responsible to
            report and investigate errors reported on Sentry.I added as well
            unit tests and E2E tests coverage on the partner platform.
          </p>
          <p>
            For a better user experience, I decided to create a ticket to make
            the Ki partner platform more responsive. It was not on the JIRA
            board but it was a small task and I know it would be a nice-to-have
            feature for our platform, therefore I created the ticket and
            implemented responsive design to the Ki partner platform.
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
            75 women and/or non-binary people sucessfully completed my web
            development classes and received the KickStarter web development
            certificates.
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
            I am helping developing a free React Native application to help
            people tracking their PrEP treatment ( a treatment method used to
            prevent HIV infection in individuals who are at high risk of
            acquiring the virus.)
          </p>
          <p>
            I am reviewing and approving pull requests and I am changing the
            codebase based on feedback from users.
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
            intense 3 months of programming learning using with assignments
            delivery each week available{" "}
            <a
              className="homelink"
              href="https://github.com/HanitraMelodie/homework"
            >
              here
            </a>
          </p>
          <h4>Final project: Music Therapy application</h4>
          <p>
            The final project to showcase what we learnt during the 3 months
            classes was a team project to create a React application. I found
            the idea of creating a Music Therapy application very exciting.
            Indeed, my teammate and I were passionate of music and we wanted to
            create something to help us and other to cope with stress in a fun
            and entertaining way. We were only two in my team. It was intense to
            complete this project. I create the first design of the website on
            figma{" "}
            <a
              className="homelink"
              href="https://www.figma.com/file/0N1UvXxJ2v8ggADQtvVTKO/CFG-V1-Hanitra?type=design&node-id=0-1&mode=design&t=w8wPDBqW33a2F58q-0"
            >
              here
            </a>
          </p>
          <p>
            The music therapy application itself has three differnt user&apos;s
            journey to give different options for the user. The application is
            hosted{" "}
            <a className="homelink" href="https://musictherapy.netlify.app">
              here
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
            During my free time, I enrolled for several online course on
            SheCodes platform. The final assignment was creating a weather
            application using a weather API call. The application is hosted{" "}
            <a
              className="homelink"
              href="https://weatherapplicationv2.netlify.app"
            >
              here
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
            Thesis Analysis of aerodynamics loadings on the BMW Z3 model vehicle
            using Computation Fluid Dynamics. I first built the BMW Z3 model
            vehicle using CATIA then did the simulation of the aerodynamics
            around the car using Ansys and Autodesk CFD.
          </p>
          <Tags items={["CATIA", "Ansys Workbench", "Autodesk CFD"]} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default HomePage;
