import React, { useState } from "react";

export default function Form(props) {
  //  toUpperCase
  const HandleUpclick = () => {
    let newText = text.toUpperCase();
    if (newText === 0) {
      return alert("Enter Some Text");
    }
    setText(newText);
  };

  // toLowerCase
  const HandleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //  clear button
  const HandleClclick = () => {
    let newText = "";
    setText(newText);
  };

  //  JSON to STRING to JSON
  const [btn, setBtn] = useState("Convert to JSON!");
  const HandleJNclick = () => {
    let newText = JSON.stringify(text);
    if (newText === JSON.stringify(text)) {
      setText(newText);
      setBtn("Convert to JSON!");
    } else {
      newText = JSON.parse(text);
      setText(newText);
    }
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className=" mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          rows="8"
          placeholder="Enter Text"
          value={text}
          onChange={HandleOnChange}
        ></textarea>
      </div>
      <div className="d-flex gap-3">
        <button className="btn btn-primary " onClick={HandleUpclick}>
          convert to upperCare!
        </button>
        <button className="btn btn-secondary " onClick={HandleLoclick}>
          convert to LowerCase!
        </button>
        <button className="btn btn-secondary " onClick={HandleClclick}>
          Clear Text!
        </button>
        <button className="btn btn-secondary disabled " onClick={HandleJNclick}>
          {btn}
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} Words {text.length} length
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to read</p>
        <hr />
        <h3 className="m-0"> Preview 👇 </h3>
        <hr className="mt-1" />
        <p> {text.length > 0 ? text :'Enter something to preview'  }</p>
      </div>
    </div>
  );
}
