import React from "react";

const TwoZeroTwoFour = () => {
  let arr = [
    {
      month: "January",
      events: ["21 Day Lifestyle Change Workshop", "AYS - 45 Yoga Days"],
    },
    {
      month: "February",
      events: ["21 Day Lifestyle Change Workshop", "AYS - 45 Yoga Days"],
    },
    {
      month: "March",
      events: ["21 Day Lifestyle Change Workshop", "AYS - 45 Yoga Days"],
    },
    {
      month: "April",
      events: ["21 Day Lifestyle Change Workshop", "AYS - 45 Yoga Days"],
    },
    {
      month: "May",
      events: ["21 Day Lifestyle Change Workshop", "AYS - 45 Yoga Days"],
    },
    {
      month: "June",
      events: ["21 Day Lifestyle Change Workshop", "AYS - 45 Yoga Days"],
    },
  ];

  return (
    <div>
      <h1 className="text-center text-light bg-success">Calendar 2024</h1>
      <div className="d-flex justify-content-around p-2 flex-wrap">
        {arr.map((item, index) => (
          <div key={index} className="card m-2" style={{ width: "300px" }}>
            <div className="card-header text-white bg-dark text-center">
              {item.month}
            </div>
            <ul className="list-group list-group-flush text-center">
              {item.events.map((event, eventIndex) => (
                <li key={eventIndex} className="list-group-item text-danger p-3">
                  <i className="fas fa-calendar-days"></i> {event}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoZeroTwoFour;
