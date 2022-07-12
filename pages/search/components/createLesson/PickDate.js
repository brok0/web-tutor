import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

export const PickDate = ({ date, setDate }) => {
  return (
    <div>
      <h3 className="text-base text-center">Pick a Date</h3>
      <Calendar value={date} onChange={setDate} minDate={new Date()} className="m-auto " />
    </div>
  );
};
