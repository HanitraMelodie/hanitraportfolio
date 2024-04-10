import React from "react";
import logo from ".././images/profilepicture.svg";
import CertificateFullstack from "./pdfs/CertificateFullstack.png";
import Certificateintro from "./pdfs/Certificateintro.png";
import mscv from "./pdfs/msc.png";
function CertificationsPage() {
  return (
    <div className="page-container">
      <div className="introsection">
        <img src={logo} alt="" className="hero" />
        <section>
          <p>
            I studied Computational Softwares techniques at my university back
            in 2017 but I decided to take recent full stack development classes
            to stay up-to-date.
          </p>
        </section>
      </div>

      <table>
        <thead>
          <tr>
            <th>Certifications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MSc in Computational and Software Techniques</td>
            <td>
              <a href={mscv} target="_blank" rel="noreferrer">
                <img
                  src={mscv}
                  alt="Master of Science Certificate"
                  className="certificateimage"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Full stack development nanodegree </td>
            <td>
              <a href={CertificateFullstack} target="_blank" rel="noreferrer">
                <img src={CertificateFullstack} className="certificateimage" />
              </a>
            </td>
          </tr>
          <tr>
            <td>Introduction to Web development</td>
            <td>
              <a href={Certificateintro} target="_blank" rel="noreferrer">
                <img src={Certificateintro} className="certificateimage" />
              </a>
            </td>
          </tr>
          <tr>
            <td>SheCodesbasic</td>
            <td>
              <a
                className="certificationlink"
                href="https://www.shecodes.io/certificates/91455d2cc8f740b7bc71de594ba6ca59"
                target="_blank"
                rel="noreferrer"
              >
                Certificate available here
              </a>
            </td>
          </tr>
          <tr>
            <td>SheCodesPlus</td>
            <td>
              <a
                className="certificationlink"
                href="https://www.shecodes.io/certificates/5ee386e73a66b061ecfe48c03d45ca6c"
                target="_blank"
                rel="noreferrer"
              >
                Certificate available here
              </a>
            </td>
          </tr>
          <tr>
            <td>Freecodecamp Responsive Web design</td>
            <td>
              <a
                href="https://www.freecodecamp.org/certification/Hanitra/responsive-web-design"
                target="_blank"
                rel="noreferrer"
                className="certificationlink"
              >
                Certificate available here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CertificationsPage;
