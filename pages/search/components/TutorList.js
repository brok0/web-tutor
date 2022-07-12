import TutorCard from "./tutorCard/TutorCard";
export default function TutorList({ tutors }) {
  const list = tutors.map((tutor, i) => (
    <li key={i}>
      <TutorCard tutor={tutor}></TutorCard>
    </li>
  ));
  return <ul className="container bg-gray-300 rounded p-2 mx-auto mt-4">{tutors ? list : <li>No tutors found. Try different options</li>}</ul>;
}
