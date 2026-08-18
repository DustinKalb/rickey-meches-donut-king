import "./AboutUsSection.css";
import Image from "next/image";

function AboutUsSection() {
  return (
    <div className="margin">
      <div className="aboutCard">
        <div className="aboutText">
          <h1 className="h1">About Us</h1>
          <h2 className="h2">Lorem Ipsum</h2>
          <div className="divider" />
          <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in."
          </div>
        </div>
        <div className="imageWrapper">
          <Image className="slideShow" src="/rickster.jpg" fill quality={100} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
