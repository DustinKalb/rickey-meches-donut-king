import "./StoreHours.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function StoreHours() {
  const today = new Date().getDay();

  return (
    <div className="storeHours">
      {days.map((day, index) => {
        const isToday = index === today;

        return (
          <div key={day} className={`hoursRow ${isToday ? "activeDay" : ""}`}>
            <span>{day}</span>
            <span>4:00am - 1:00pm</span>
          </div>
        );
      })}
    </div>
  );
}

export default StoreHours;
