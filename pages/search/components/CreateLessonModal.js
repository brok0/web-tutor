import Calendar from "react-calendar";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
//idea : divide modal into pages:
//	- Pick day page : Today,tommorow etc
// 	- Pick Time page
//  - confirm page

export default function ({ onClose, tutor }) {
  const { name, rating, specialization, description, pricePerLesson, avatar } = tutor;
  const [date, setDate] = useState(new Date());
  const [dateConfirmed, setDateConfirmed] = useState(false);
  const awailableTime = ["17:00", "18:00", "20:00"]; // should request server after picking date to have these
  //const { data: session, status } = useSession();
  //constructing service url
  const baseUrl = useSelector((state) => state.user.baseServiceUrl);
  const requestUrl = baseUrl + "/lesson/createLesson";

  const createLesson = () => {
    const data = { price: pricePerLesson, date: date };

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

        setTimeout(() => {
          router.push("/profile");
        }, 2500);
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
              <div className="m-1">
                {!dateConfirmed ? (
                  <div>
                    <h3 className="text-base text-center">Pick a Date</h3>
                    <Calendar value={date} onChange={setDate} minDate={new Date()} className="m-auto " />
                  </div>
                ) : (
                  <div className="mt-16">
                    <h3 className="font-semibold mb-4 text-center">Tutor available at:</h3>
                    <div className="flex items-center justify-center">
                      {awailableTime.map((time) => (
                        <div className="border bg-purple-300 rounded-full flex p-2 hover:bg-purple-500 cursor-pointer">
                          <p className="m-auto font-semibold">{time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
