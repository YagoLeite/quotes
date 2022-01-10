import { useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [isEntering, setIsEntering] = useState(false);

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    setEnteredText("");
    setEnteredAuthor("");
  }

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your data will be lost. =/"
        }
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              onChange={authorChangeHandler}
              value={enteredAuthor}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              onChange={textChangeHandler}
              value={enteredText}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
