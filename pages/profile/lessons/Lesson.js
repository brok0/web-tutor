import CONSTANTS from "./constants";
import LessonDetails from "./components/LessonDetails";
import { useState } from "react";

export default function Lesson({ lesson }) {
  const { tutorName, topic, date, state } = lesson;
  const [open, setOpen] = useState(false);

  const resolveLessonState = () => {
    switch (state) {
      case CONSTANTS.lessonStates.active:
        return <div className="text-purple-400">{new Date(date).toLocaleString()}</div>;
      case CONSTANTS.lessonStates.cancelled:
        return <div className="text-red-500">Canceled</div>;
      case CONSTANTS.lessonStates.finished:
        return <div className="text-green-300">Finished</div>; /// TODO : ADD ICONS
      default:
        break;
    }
  };

  const toggleDetailsModal = () => {
    setOpen(!open);
  };

  return (
    <div className="container w-11/12 rounded border-black border-2 m-2 p-2 cursor-pointer hover:bg-gray-200 md:flex md:justify-between" onClick={toggleDetailsModal}>
      <div>
        <h2>
          <strong>Tutor</strong> : {tutorName}
        </h2>
        <h2>
          <strong>Topic</strong> : {topic}
        </h2>
      </div>
      <div className="mt-auto mb-auto rounded-full border-gray-400 border-2 p-2 font-bold">{resolveLessonState()}</div>

      {open ? <LessonDetails onClose={toggleDetailsModal} lesson={lesson} /> : ""}
    </div>
  );
}
