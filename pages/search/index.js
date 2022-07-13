import { MainLayout } from "../../layouts/MainLayout";
import SearchBar from "./components/SearchBar";
import TutorList from "./components/TutorList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Spinner = () => {
  //TODO : change this to skeleton
  return (
    <div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <div className="w-2 h-2 bg-blue-400 rounded-lg"></div>
      </div>
      Loading...
    </div>
  );
};
export default function SearchPage() {
  //constructing service url
  const baseUrl = useSelector((state) => state.global.baseServiceUrl);
  const getRequestUrl = baseUrl + "/tutor/getTutors";

  const [tutors, setTutors] = useState();

  useEffect(() => {
    fetch(getRequestUrl)
      .then((res) => res.json())
      .then((res) => {
        setTutors(res);
      });
  }, []);

  const updateTutors = (tutors) => {
    setTutors(tutors);
  };

  return (
    <MainLayout pageTitle="Search for tutors">
      <div className="container px-4 m-auto">
        <SearchBar updateTutors={updateTutors} />
        {tutors ? <TutorList tutors={tutors} /> : <Spinner></Spinner>}
      </div>
    </MainLayout>
  );
}
