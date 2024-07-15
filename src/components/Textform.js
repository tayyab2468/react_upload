import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared!", "success");
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : props.mode === 'red' ? 'black' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : props.mode === 'red' ? 'pink' : 'white',
              color: props.mode === 'dark' ? 'white' : props.mode === 'red' ? 'black' : '#042743'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : props.mode === 'red' ? 'black' : '#042743' }}>
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
        </div>
      </div>
    </>
  );
}
