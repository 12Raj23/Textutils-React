import React, { useState } from "react";

export default function About(props) {
  // const [mystyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let mystyle = {
    color: props.mode === `dark` ? `white` : `#042743`,
    backgroundColor: props.mode === `dark` ? `#042743` : `white`,
    border: `1px solid`,
    borderColor: props.mode === `dark` ? `white` : `#042743`,
  };

  return (
    <div
      className="container"
      style={{
        color: props.mode === `dark` ? `white` : `#042743`,
      }}
    >
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils gives you a way to analyze your text quickly and
              efficiently.Be it word count,character count
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text,Textutils
              reports the number of words and characters.Thus it is suitable for
              writing text with word/character limit
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works in any web browsers such as
              chrome,firefox,internet,safari,opera.It suits to count character
              in facebook,blog,books,excel document,pdf document,essays,etc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
