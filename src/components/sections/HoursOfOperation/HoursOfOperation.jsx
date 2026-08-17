import "./HoursOfOperation.css";
import Image from "next/image";

function HoursOfOperation() {
  return (
    <div className="margin">
      <div className="hoursCard">
        <div className="hoursImageWrapper">
          <Image
            className="donut"
            src="/chocnglaze2.png"
            width={700}
            height={700}
            quality={100}
          />
        </div>
        <div>
          <div>Closed Opens tomorrow at 4:00am</div>
          <div>Business Hours</div>
          <div className="hoursOfOperation">
            <div>Sunday</div>
            <div>4:00am - 1:30pm</div>
            <div>Monday</div>
            <div>4:00am - 1:30pm</div>
            <div>Tuesday</div>
            <div>4:00am - 1:30pm</div>
            <div>Wednesday</div>
            <div>4:00am - 1:30pm</div>
            <div>Thursday</div>
            <div>4:00am - 1:30pm</div>
            <div>Friday</div>
            <div>4:00am - 1:30pm</div>
            <div>Saturday</div>
            <div>4:00am - 1:30pm</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoursOfOperation;
