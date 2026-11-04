import "./SocialsSection.css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

function SocialsSection() {
  return (
    <div className="socialsCard">
      <div style={{ fontSize: "50px" }}>Check Us Out On Social Media!</div>
      <br />
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener"
        aria-label="Visit our Facebook page"
        title="Visit our Facebook page"
      >
        <CiFacebook className="socialIcon" />
      </a>
      <a href="https://instagram.com">
        <CiInstagram className="socialIcon" />
      </a>
    </div>
  );
}

export default SocialsSection;
