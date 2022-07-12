import { useSession } from "next-auth/react";
import { useState } from "react";
import { CreateConversation } from "../CreateConversation";
import CreateLessonModal from "../createLesson/CreateLessonModal";
import { CardButtons } from "./CardButtons";
import { cutText } from "./helpers";

export default function TutorCard({ tutor }) {
  const { name, rating, specialization, description, pricePerLesson, avatar } = tutor;
  const { data: session } = useSession();

  const [modalsOpen, setModalsOpen] = useState({
    conversationModal: false,
    datePickerModal: false,
  });

  const closeModals = () => {
    setModalsOpen({
      conversationModal: false,
      datePickerModal: false,
    });
  };

  return (
    <div className="container w-full p-2 bg-white rounded m-auto md:justify-between mb-2 md:flex">
      <div className="my-auto mb-2 md:ml-3">
        <img alt="profilepicture" src={avatar} className="w-16 h-16 rounded"></img>
        <div className="flex ml-3">
          <h4>{rating} &nbsp;</h4> <img src="./star.png" className="w-4 h-4 my-auto"></img>
        </div>
        <h4>
          <strong>{name}</strong>
        </h4>
      </div>
      <div className="mb-2 md:w-2/3">
        <h3>
          <strong>Specialization :</strong> {specialization}
        </h3>
        <p>{cutText(description)}</p>
      </div>
      <div>
        <p>
          <strong>Price: </strong>
          {pricePerLesson}$/hour
        </p>
        {session && <CardButtons setModalsOpen={setModalsOpen} />}
      </div>

      {modalsOpen.datePickerModal && <CreateLessonModal onClose={closeModals} tutor={tutor} />}
      {modalsOpen.conversationModal && <CreateConversation onClose={closeModals} tutor={name} />}
    </div>
  );
}
