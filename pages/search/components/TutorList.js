import TutorCard from "./tutorCard/TutorCard";
export default function TutorList({ tutors }) {
  console.log(tutors);
  return (
    <ul className="container bg-purple-300 rounded p-2 mx-auto mt-4">
      {tutors && tutors.length > 0 ? (
        tutors.map((tutor, i) => (
          <li key={i}>
            <TutorCard tutor={tutor}></TutorCard>
          </li>
        ))
      ) : (
        <li>No tutors found. Try different options</li>
      )}
    </ul>
  );
}
