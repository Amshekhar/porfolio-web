import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../../Assetes/img/logo.svg";
import navIcon1 from "../../Assetes/img/nav-icon1.svg";
import navIcon2 from "../../Assetes/img/icons8-github (1).svg";
import navIcon3 from "../../Assetes/img/nav-icon3.svg";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h1 className="shekhar">SHEKHAR</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon social-icon-footer">
              <a href="https://www.linkedin.com/in/shekhar-saini-420b241b4/"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}