import CONSTANTS from "../constants";
import { cancelLesson } from "./service";

export default function LessonDetails({ onClose, lesson }) {
  const { id, tutorName, topic, date, state } = lesson;

  const onCancelLesson = () => {
    cancelLesson(id);

    //update current lesson on page
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all md:w-auto sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center sm:mt-0  sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900 border-b-2 mb-2">
                Lesson <i>{topic}</i> at {new Date(date).toLocaleString()}
              </h3>

              <h4>
                <strong>State</strong> : {state}
              </h4>

              <h4>
                <strong>Tutor</strong> : {tutorName}
              </h4>

              {/* //TODO : Add links,comments,chat etc */}
            </div>
          </div>
          <div className="p-2 bg-gray-200">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
            {lesson.state !== CONSTANTS.lessonStates.cancelled && (
              <button
                type="button"
                className="text-white mt-3 w-full inline-flex justify-center bg-red-500 rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onCancelLesson}
              >
                <p className="">Cancel lesson</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
