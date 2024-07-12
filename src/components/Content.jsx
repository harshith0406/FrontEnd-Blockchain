import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Image from "react-bootstrap/Image";
import img1 from "../assets/doctor.jpg";
import img2 from "../assets/doctor2.jpeg"
function Content() {
  return (
    <Container className="content-text">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <div className="py-4">
        <h1>Welcome to Medi-Crypt</h1>
      </div>
      <Row>
        <Col>
          <h2>
            Revolutionizing Patient Record Management with Blockchain Technology
          </h2>
          <p class="fw-light fs-4 fst-italic">
            Welcome to Medi-Crypt, the future of secure and efficient patient
            record management. Our platform leverages the power of blockchain
            technology to ensure that patient data is stored, shared, and
            accessed with the highest levels of security and transparency.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <h2 className="py-3">Why Medi-Crypt?</h2>
          <ul class="fw-light fs-4 fst-italic">
            <li>
              <b>Security:</b>Using blockchain, we ensure that patient records
              are immutable and securely encrypted. This guarantees that only
              authorized personnel can access sensitive information.
            </li>
            <li>
              <b>Transparency:</b> Blockchain’s decentralized nature allows for
              a transparent system where all actions are traceable, reducing the
              risk of tampering and fraud.
            </li>
            <li>
              <b>Efficiency:</b> Medi-Crypt simplifies the process of accessing
              and updating patient records, ensuring that healthcare providers
              have the most up-to-date information at their fingertips.{" "}
            </li>
            <li>
              <b>Privacy:</b> We prioritize patient confidentiality, ensuring
              that personal health information is protected from unauthorized
              access.
            </li>
          </ul>
        </Col>
        <Col
          xs={6}
          md={4}
          className="py-5 d-flex justify-content-center align-items-center"
        >
          <Image src={img1} rounded className="doctor-img" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <h2 className="py-3">Key Features</h2>

          <ul class="fw-light fs-4 fst-italic">
            <li>
              <b>Decentralized Record Storage: </b> Patient records are stored
              across a distributed network, eliminating the risk of single-point
              failures and enhancing data integrity.
            </li>
            <li>
              <b>Smart Contracts: </b> Automated agreements facilitate secure
              and efficient transactions, ensuring that patient data is shared
              only under predefined conditions.
            </li>
            <li>
              <b> Interoperability: </b> Our system integrates seamlessly with
              existing healthcare infrastructure, allowing for easy adoption and
              integration.
            </li>
            <li>
              <b> Patient Empowerment: </b> Patients have control over their own
              data, with the ability to grant and revoke access to their records
              as needed.
            </li>
          </ul>
        </Col>
        <Col
          xs={6}
          md={4}
          className="py-5 d-flex justify-content-center align-items-center"
        >
          <Image src={img2} rounded className="doctor-img" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>Services We Provide</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
