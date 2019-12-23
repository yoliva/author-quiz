import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";

const authors = [];

const state = {
  author: authors[0],
  books: authors[0].books
};
ReactDOM.render(<AuthorQuiz authors />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
