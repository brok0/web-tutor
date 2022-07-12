import { useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { PickDate } from "./PickDate";
import { PickTime } from "./PickTime";
//idea : divide modal into pages:
//	- Pick day page : Today,tommorow etc
// 	- Pick Time page
//  - confirm page

export default function ({ onClose, tutor }) {
  const { id, specialization, pricePerLesson } = tutor;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date());
  const [dateConfirmed, setDateConfirmed] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  //constructing service url
  const baseUrl = useSelector((state) => state.global.baseServiceUrl);
  // const userData = useAppSelector(selectUser);
  const requestUrl = baseUrl + "/lesson/createLesson";

  const createLesson = () => {
    const data = {
      price: pricePerLesson,
      date: date,
      studentEmail: session.user.email,
      tutorId: id,
    };

    fetch(requestUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setSubmitting(false);
        setRequestStatus(res.message);
      });
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
            <div className="mt-3 text-center sm:mt-0  sm:text-left h-96 w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900 border-b-2 mb-2" id="modal-title">
                Buy Lesson in {specialization} for <b>{pricePerLesson}$</b>
              </h3>
              <div className="m-1">{!dateConfirmed ? <PickDate date={date} setDate={setDate} /> : <PickTime />}</div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {dateConfirmed ? (
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-300 text-base font-medium text-black hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={createLesson}
              >
                Buy Lesson
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setDateConfirmed(true);
                }}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-300 text-base font-medium text-black hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Confirm Date
              </button>
            )}
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
