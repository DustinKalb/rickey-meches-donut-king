import "./ContactSection.css";
import { CiPhone } from "react-icons/ci";

function ContactSection() {
  return (
    <>
      <div className="contactBackground">
        <div className="contactTitle">
          <h1 className="contactUs">Contact Us</h1>
          <h1>Need To Place An Order?</h1>
          <div>Questions about orders, hours, or anything else?</div>
        </div>
        <div className="contactCard">
          <CiPhone className="socialIcon" />
          <h1 className="giveUsACall">Give Us A Call</h1>
          <div>All orders are handled over the phone.</div>
          <div className="divider2" />
          <h1 className="number">(123) 456-7890</h1>
          <div className="callUs">Call Us</div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
