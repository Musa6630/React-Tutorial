import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was Clicked " + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted in Uppercase", "success")
  };

  const handleLowClick = () => {
    //console.log("LowerCase was Clicked " + Text);
    let newText = Text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted in LowerCase", "success")
  };

  const handleFindClick = () => {
    //console.log("find was clicked");
    let newText2 = Text.split(Text2).length - 1;
    setText2(newText2);
    props.showAlert("Your Text has been found", "success")
  };
  const handleClearClick = () => {
    let newText = "";
    props.showAlert("Text has been cleared", "success")

    setText(newText);
    // setText(newText2);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text has been copied", "success")
  };
  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success")
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
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white"
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
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white"
            }}
            id="myBox"
            value={Text2}
            rows="2"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleFindClick}>
          Find{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear{" "}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          Your Sentence Has {Text.split(" ").length} Words and {Text.length}{" "}
          Character
        </p>
        <p>This takes {0.008 * Text.split(" ").length} Minutes to Read.</p>
        {/* <p>{Text2} Appeared {Text.split(Text2).length-1} Times</p> */}
        <h3>Preview</h3>
        <p>{Text.length>0?Text: "Enter Your Text To Preview"}</p>
      </div>
    </>
  );
}
