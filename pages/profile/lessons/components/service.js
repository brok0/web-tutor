import store from "../../../../store/store";
const state = store.getState();
const baseUrl = state.global.baseServiceUrl;
const requestUrl = baseUrl + "/lesson/cancel";

const cancelLesson = (lessonId) => {
  fetch(requestUrl, {
    body: JSON.stringify({ id: lessonId }),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      //      setLessons(res);
    });
};

export { cancelLesson };
