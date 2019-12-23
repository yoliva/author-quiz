import React from "react";
import "./App.css";
import "./bootstrap.min.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Turn({ author, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <image
          src={author.imageUrl}
          className={authorimage}
          alt="Author"
        ></image>
      </div>
      <div className="col-6">
        {books.map(title => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
}
function Continue() {
  return <div></div>;
}
function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from{" "}
          <a href="http://localhost:3000">Wikipedia Commons</a>
        </p>
      </div>
    </div>
  );
}

function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
