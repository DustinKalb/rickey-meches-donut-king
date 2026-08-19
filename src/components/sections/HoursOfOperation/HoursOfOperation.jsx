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
            width={600}
            height={600}
            quality={100}
          />
        </div>
        <div className="hours">
          <h1 className="h1">Hours & Location</h1>
          <h2 className="h2">Made Daily, Just For You</h2>
          <div className="divider" />
          <div className="column">
            <div className="hoursText">
              Lorem Ipsum blah blah blah blah blah blah blah blah blah blah blah
            </div>
            <div className="storeHoursBorder">
              <div className="storeHours">
                <div>Closed Opens tomorrow at 4:00am</div>
                <div>Business Hours</div>
                <div className="hoursOfOperation">
                  <div>Sunday</div>
                  <div>4:00am - 1:00pm</div>
                  <div>Monday</div>
                  <div>4:00am - 1:00pm</div>
                  <div>Tuesday</div>
                  <div>4:00am - 1:00pm</div>
                  <div>Wednesday</div>
                  <div>4:00am - 1:00pm</div>
                  <div>Thursday</div>
                  <div>4:00am - 1:00pm</div>
                  <div>Friday</div>
                  <div>4:00am - 1:00pm</div>
                  <div>Saturday</div>
                  <div>4:00am - 1:00pm</div>
                </div>
                <br />
                <div>*Times are subject to change.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoursOfOperation;
