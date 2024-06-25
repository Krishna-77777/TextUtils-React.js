// import React,{useState} from 'react'

// export default function MyForm(props) {
//     const handleUpClick= ()=>{
//         console.log("Upper case was clicked"+text);
//         let newText=text.toUpperCase();
//         setText(newText)
//     }
//     const handleOnChange=(event)=>{
//         console.log("On change");
//         setText(event.target.value)
//     }
//     const [text,setText]=useState("Enter  your text");
//   return (
//     <div>
//    <h1>{props.heading} </h1>
// <div className="mb-3">
 
//   <textarea className="form-control" value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="3"></textarea>
// </div>
// <button className="btn btn-primary" onClick{...handleUpClick}>Convert to Upppercase</button>
//     </div>
//   )
// }
import React, { useState } from 'react';

export default function MyForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase");
    };
    const handleLoClick = () => {
        console.log("Upper case was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase");
    };
    const handleclearClick = () => {
        console.log("Upper case was clicked " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared");
    };
    const handleCopy = () => {
        console.log("Upper case was clicked " );
        var text =document.getElementById ("exampleFormControlTextarea1");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to clipboard");
       
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <><div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>
             Copy text
            </button>
            <button className="btn btn-primary mx-3" onClick={handleclearClick}>
             Clear text
            </button>
        </div>
        <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text above to preview"}</p>
       
        </div>  </> 
    );
}

