import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleClClick = ()=>{
        let newtext = ""
        setText(newtext)
        props.showAlert("Cleared Text!","success")
    }
    const handleCapClick = ()=>{
        let newtext = text[0].toUpperCase() + text.substring(1);
        setText(newtext)
        props.showAlert("Capitalized Text!","success")
    }
    const handleRevClick = ()=>{
        let newtext = text.split("").reverse().join("");;
        setText(newtext)
        props.showAlert("Reversed Text!","success")
    }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className='Container' style = {props.style}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" onChange = {handleOnChange}value = {text}  style = {{background :props.mode === 'dark'?'grey':'white', color :props.mode === 'dark'?'white':'black'}}id="myBox" rows="8"></textarea>
         </div>
         {/* <button className= "btn btn-primary mx-1"style={{ backgroundColor: props.mode === 'dark' ? 'green' : '#0d6efd ' }} onClick={handleUpClick}>Convert to Uppercase</button> */}
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-1" onClick={handleCapClick}>Convert to Capitalized word</button>
         <button className="btn btn-primary mx-1" onClick={handleRevClick}>Convert to reverse </button>
         <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear text </button>
         {/* <button className="btn btn-primary mx-1" onClick={countOccurrences}>Check repeated words </button> */}
    </div>
    {/* <div className="container my-2" style = {{color :props.mode === 'dark'?'white':'#042743'}}> */}
    <div className="container my-2" style = {props.style}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words {text.length} characters </p> 
        <p>{text.split(" ").length-1>0 ?0.008*text.split(" ").length:0} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here. "}</p>
    </div>
    </>
  )
}
