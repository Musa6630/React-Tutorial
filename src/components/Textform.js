import React, {useState} from "react";

export default function Textform(props) {
  const handleUpClick= ()=>{
    //console.log("UpperCase was Clicked " + Text);
    let newText=Text.toUpperCase();
    setText(newText);
  }

  const handleLowClick=()=>{
    //console.log("LowerCase was Clicked " + Text);
    let newText=Text.toLocaleLowerCase();
    setText(newText);
  }

  const handleFindClick=()=>{
    //console.log("find was clicked");
    let newText2=Text.split(Text2).length-1;
    setText2(newText2);
  }
  const handleClearClick=()=>{
    let newText="";
    
    setText(newText);
    // setText(newText2);
  }

  const HandleOnchange= (event)=>{
    //console.log("Onchange");
    setText(event.target.value);
  }
  const HandleOnchange2= (event)=>{
    //console.log("Onchange");
    setText2(event.target.value);
  }


  const [Text,setText]=useState("")
  const[Text2,setText2]=useState("")
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control my-3" onChange={HandleOnchange}
          id="myBox" value={Text}
          rows="6"
        ></textarea>
        <textarea
          className="form-control my-3" onChange={HandleOnchange2}
          id="myBox" value={Text2}
          rows="2"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleFindClick}>Find </button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear </button>

    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>Your Sentence Has {Text.split(" ").length} Words and {Text.length} Character</p>
      <p>This takes {0.008 * Text.split(" ").length} Minutes to Read.</p>
      {/* <p>{Text2} Appeared {Text.split(Text2).length-1} Times</p> */}
      <h3>Preview</h3>
      <p>{Text}</p>
    </div>
  </>

  )
}
