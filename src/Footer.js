import './App.css';
import * as React from "react";

const ProductLink = ({ children }) => (
    <div className="product-link">{children}</div>
  );
  
  const InformationLink = ({ children }) => (
    <div className="information-link">{children}</div>
  );
  
   
const CompanyLink = ({ children }) => (
    <div className="company-link">{children}</div>
  );
  
  const productLinks = [
    "Employee database",
    "Payroll",
    "Absences",
    "Time tracking",
    "Shift planner",
    "Recruiting",
  ];
  
  const informationLinks = ["FAQ", "Blog", "Support"];
  
  const companyLinks = [
    "About us",
    "Careers",
    "Contact us",
    "Lift Media",
  ];
  
export  default function Footer()
{
   
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="product-links">
              <h3 className="product-heading">Product</h3>
              {productLinks.map((link, index) => (
                <ProductLink key={index}>{link}</ProductLink>
              ))}
            </div>
            <div className="information-links">
              <h3 className="information-heading">Information</h3>
              {informationLinks.map((link, index) => (
                <InformationLink key={index}>{link}</InformationLink>
              ))}
            </div>
            <div className="company-links">
              <h3 className="company-heading">Company</h3>
              {companyLinks.map((link, index) => (
                <CompanyLink key={index}>{link}</CompanyLink>
              ))}
            </div>
            <section className="contact-section">
              <h2 className="contact-heading">Contact Us</h2>
              <form>
                <div className="email-input-container">
                  {/* <label htmlFor="email" className="email-input-label">
                    Email address
                  </label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-label="Email address"
                    className="visually-hidden"
                    placeholder="Email address"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf7f3b0d-fe88-4303-823c-b8dad01d70c7?apiKey=599a36fd9484491d9a74d5ed2ac63035&"
                    alt=""
                    className="email-icon"
                  />
                </div>
                {/* <label htmlFor="message" className="visually-hidden">
                  Message
                </label> */}
                <textarea
                  id="message"
                  name="message"
                  aria-label="Message"
                  className="message-input"
                  placeholder="Message"
                ></textarea>
              </form>
            </section>
          </div>
        </div>
      </footer>
    );
}
