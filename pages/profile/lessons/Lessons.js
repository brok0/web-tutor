import CONSTANTS from "./constants";
import Lesson from "./Lesson";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ProfileLayout } from "../../../layouts/ProfileLayout";
// const lessons = [
//   {
//     tutor: "John Doe",
//     topic: "Topic",
//     date: "30.11 15:00",
//     state: "Active",
//   },
//   {
//     tutor: "John Doe",
//     topic: "Topic",
//     date: "30.11 15:00",
//     state: "Finished",
//   },
//   {
//     tutor: "John Doe",
//     topic: "Topic",
//     date: "30.11 15:00",
//     state: "Cancelled",
//   },
// ];
export default function Lessons() {
  const [lessons, setLessons] = useState();
  const baseUrl = useSelector((state) => state.global.baseServiceUrl);
  const requestUrl = baseUrl + "/lesson/getLessons";
  const { data: session } = useSession();

  useEffect(() => {
    fetch(requestUrl, {
      body: JSON.stringify({ userEmail: session.user.email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLessons(res);
      });
  }, []);

  return (
    <ProfileLayout pageTitle={"Your lessons"}>
      {lessons && lessons.length > 0 ? (
        <div className="h-64  mt-8 md:flex md:justify-around">
          <div className="w-full center md:ml-4 ">
            <h1>Upcoming</h1>
            <hr className="w-1/3" />
            <div>
              {lessons
                .filter((lesson) => lesson.state === "Active")
                .map((lesson) => (
                  <Lesson lesson={lesson} />
                ))}
            </div>
          </div>
          <div className="w-full">
            <h1>Finished</h1>
            <hr className="w-1/3" />
            <div>
              {lessons
                .filter((lesson) => lesson.state !== "Active")
                .map((lesson) => (
                  <Lesson lesson={lesson} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p>
          No lesson yet scheduled. <Link href="/search">Find some!</Link>
        </p>
      )}
    </ProfileLayout>
  );
}
