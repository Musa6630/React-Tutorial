import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was Clicked " + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted in Uppercase", "success");
  };

  const handleLowClick = () => {
    //console.log("LowerCase was Clicked " + Text);
    let newText = Text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted in LowerCase", "success");
  };

  const handleFindClick = () => {
    //console.log("find was clicked");
    let newText2 = Text.split(Text2).length - 1;
    setText2(newText2);
    props.showAlert("Your Text has been found", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    props.showAlert("Text has been cleared", "success");

    setText(newText);
    // setText(newText2);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text has been copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };

  const HandleOnchange = (event) => {
    //console.log("Onchange");
    setText(event.target.value);
  };
  const HandleOnchange2 = (event) => {
    //console.log("Onchange");
    setText2(event.target.value);
  };

  const [Text, setText] = useState("");
  const [Text2, setText2] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={HandleOnchange}
            id="myBox"
            value={Text}
            rows="6"
          ></textarea>
          <textarea
            className="form-control my-3"
            onChange={HandleOnchange2}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            value={Text2}
            rows="2"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
          disabled={Text.length === 0}
        >
          Convert to UPPERCASE
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
          disabled={Text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleFindClick}
          disabled={Text.length === 0}
        >
          Find{" "}
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          disabled={Text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
          disabled={Text.length === 0}
        >
          Remove extra spaces
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
          disabled={Text.length === 0}
        >
          Clear{" "}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          Your Sentence Has{" "}
          {
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {Text.length} Character
        </p>
        <p>
          This takes{" "}
          {0.008 *
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to Read.
        </p>
        {/* <p>{Text2} Appeared {Text.split(Text2).length-1} Times</p> */}
        <h3>Preview</h3>
        <p>{Text.length > 0 ? Text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}
