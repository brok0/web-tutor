export const CardButtons = ({ setModalsOpen, modalsOpen }) => {
  const openDatePicker = () => {
    setModalsOpen({
      ...modalsOpen,
      datePickerModal: true,
    });
  };
  const openCreateConversations = () => {
    setModalsOpen({
      ...modalsOpen,
      conversationModal: true,
    });
  };

  return (
    <div className="flex md:flex-col">
      <button onClick={openDatePicker} className="w-24 h-8 bg-purple-300 rounded hover:bg-purple-500 m-1 text-xs bold">
        Buy Lesson
      </button>
      <button onClick={openCreateConversations} className="w-24 h-8 bg-gray-300 rounded hover:bg-purple-500 m-1 md:my-auto text-xs bold">
        Write Message
      </button>
    </div>
  );
};
