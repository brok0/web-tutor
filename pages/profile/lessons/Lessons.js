import PageHeader from "../components/PageHeader";
import CONSTANTS from "./constants";
import Lesson from "./Lesson";
import Head from "next/head";
import Header from "../../../components/Header";

export default function Lessons() {
  const lessons = [
    {
      tutor: "John Doe",
      topic: "Topic",
      date: "30.11 15:00",
      state: "Active",
    },
    {
      tutor: "John Doe",
      topic: "Topic",
      date: "30.11 15:00",
      state: "Finished",
    },
    {
      tutor: "John Doe",
      topic: "Topic",
      date: "30.11 15:00",
      state: "Cancelled",
    },
  ];
  return (
    <div>
      <Head>
        <title>Your lessons</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <div className="md:px-8 sm:px-1">
          <Header />
          <PageHeader />
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
        </div>
      </main>
    </div>
  );
}
