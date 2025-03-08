import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python Or JavaScript",
    answerA: "Python",
    answerB: "JavaScripts",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
