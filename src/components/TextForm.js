import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleClearClick = () => {
    // console.log("clear text" + text);
    let newText = " ";
    setText(newText);
    props.showAlert("text is cleared", "success");
  };

  const handleLoClick = () => {
    // console.log("lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text is copied", "success");
  };

  const [text, setText] = useState("Enter text here2");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1> {props.heading} </h1>{" "}
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
            style={{
              backgroundColor: props.mode === `dark` ? `#042743` : `white`,
              color: props.mode === `dark` ? `white` : `black`,
            }}
          >
            {" "}
          </textarea>{" "}
        </div>{" "}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          {" "}
          Convert to Upper case{" "}
        </button>{" "}
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          {" "}
          Convert to Lower case{" "}
        </button>{" "}
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          {" "}
          Clear text{" "}
        </button>{" "}
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          {" "}
          Copy Text{" "}
        </button>{" "}
      </div>{" "}
      <div
        className="container my-2"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1> your text summary </h1>{" "}
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length}
          characters{" "}
        </p>{" "}
        <p>
          {" "}
          {0.008 * text.split(" ").length}
          Minutes read{" "}
        </p>{" "}
        <h2> Preview </h2>{" "}
        <p>
          {" "}
          {text.length < 0
            ? text
            : "Enter something in the text box to preview"}{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
}
