import "./SocialsSection.css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

function SocialsSection() {
  return (
    <div className="socialsCard">
      <div style={{ fontSize: "50px" }}>Check Us Out On Social Media!</div>
      <br />
      <CiFacebook className="socialIcon" />
      <CiInstagram className="socialIcon" />
    </div>
  );
}

export default SocialsSection;
