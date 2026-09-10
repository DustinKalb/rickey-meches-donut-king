import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="contactBackground">
      <h1 className="contactUs">Contact Us</h1>
      <h1>Need To Place An Order?</h1>
      <div>Questions about orders, hours, or anything else?</div>
      <div className="contactCard">
        <div style={{ fontSize: "50px" }}>O</div>
        <h1 className="giveUsACall">Give Us A Call</h1>
        <div>All orders are handled over the phone.</div>
        <div>-</div>
        <h1>(123) 456-7890</h1>
        <div className="callUs">Call Us</div>
      </div>
    </div>
  );
}

export default ContactSection;
