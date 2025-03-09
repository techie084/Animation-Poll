<script>
  import PollStore from "../stores/pollStore.js";
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/btn.svelte";

  let dispatch = createEventDispatcher();
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const submitHandler = () => {
    valid = true;

    // Validating Question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }

    // Validating Answers-A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A can't be empty";
    } else {
      errors.answerA = "";
    }

    // Validating Answers-B
    if (fields.answerB.trim().length < 5) {
      valid = false;
      errors.answerB = "Answer B can't be empty";
    } else {
      errors.answerB = "";
    }

    // Add New Poll
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };

      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A value:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B value:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 330px;
    text-align: center;
    margin: 0 auto;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }

  @media (max-width: 640px) {
    .form-field {
      max-width: 350px;
    }
  }
</style>
