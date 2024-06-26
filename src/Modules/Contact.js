import React from "react";
import "./Contact.css";
import Navbar_ from "./Navbar";
import {
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <div className="container-fluid">
        <div id="Footer">
          <div className="row">
            <div className="col-md-6">
              <p className="copy">
                <b> My Social Info</b>
                <button className="back-btn" onClick={topFunction}>
                  Back to Top
                </button>
              </p>
            </div>
            <div className="col-md-6">
              <div className="digiAccounts">
                <a
                  href="https://www.linkedin.com/in/amarnadh-jasti-4aaa92209/"
                  target="new"
                >
                  {" "}
                  <BsLinkedin className="accs" style={{ color: "#0077B5" }} />
                </a>

                <a href="https://github.com/Amarnadh12345" target="new">
                  {" "}
                  <BsGithub className="accs" />
                </a>

                <a href="https://wa.me/919502953302?text=Hello" target="new">
                  {" "}
                  <BsWhatsapp
                    className="accs"
                    style={{ color: "lightgreen" }}
                  />
                </a>

                <a href="mailto:amarnadhjasti123@gmail.com" target="new">
                  {" "}
                  <FiMail className="accs" style={{ color: "#d4d1d1" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
