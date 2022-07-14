import React, { useState } from "react";

const awailableTime = ["17:00", "18:00", "20:00"]; // should request server after picking date to have these

export const PickTime = ({ date, setDate }) => {
  //const [selectedTime,setSelectedTime] = useState("");

  const addTime = (e) => {
    const dateCopy = date;
    const timeParts = e.target.textContent.split(":");

    dateCopy.setHours(timeParts[0]);
    dateCopy.setMinutes(timeParts[1]);
    console.log(dateCopy);
    setDate(dateCopy);
  };

  return (
    <div className="mt-16">
      <h3 className="font-semibold mb-4 text-center">Tutor available at:</h3>
      <div className="flex items-center justify-center">
        {awailableTime.map((time) => (
          <div className="border bg-purple-300 rounded-full flex p-2 hover:bg-purple-500 cursor-pointer">
            <p className="m-auto font-semibold" onClick={addTime}>
              {time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
