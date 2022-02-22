import React from "react";

// icons
import { Icon } from "@iconify/react";
import mail from "@iconify/icons-fluent/mail-20-regular";
import github from "@iconify/icons-akar-icons/github-outline-fill";

const Contact = ({ contactRef }) => {
  return (
    <footer>
      <div className="footer-container">
        <table className="contact-links " ref={contactRef}>
          <tbody>
            <tr className="first-row">
              <td className="contact">
                <Icon icon={mail} className="mail-icon contact-icon" />
              </td>
              <td className="contact-link">Gazersuthy@outlook.com</td>
            </tr>
            <tr className="second-row">
              <td className="contact">
                <Icon icon={github} className="github-icon contact-icon" />
              </td>
              <td className="contact-link">
                <a href="https://github.com/GazerSuthy" className="github-link">
                  https://github.com/GazerSuthy
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default Contact;
