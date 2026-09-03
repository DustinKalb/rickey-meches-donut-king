import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="contactBackground">
      <h3>Contact Us</h3>
      <h1>Need To Place An Order?</h1>
      <div>Questions about orders, hours, or anything else? Just call!</div>
      <div className="contactCard">
        <div>Give Us A Call</div>
        <div>-</div>
        <div>(123) 456-7890</div>
        <div className="callUs">Call Us</div>
      </div>
    </div>
  );
}

export default ContactSection;
