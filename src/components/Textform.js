import React, { useState, useEffect } from 'react'


export default function Textform(props) {
    const uppercaseclick = () => {
        // console.log("upper case clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowercaseclick = () => {
        // console.log("lower case clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearclick = () => {
        // console.log("clear button is clicked")
        let newText = "";
        setText(newText)
    }
    const copyclick =() => {
        let text = document.getElementById('textbox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard");

    }
    const extraspaceremoveclick =() =>{
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }

    useEffect(() => {
        // array of words
        const words = text.split(' ');
    
        // update word count
        let wordCount = 0;
        words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
        });
        setWordCount(wordCount);
        //  eslint-disable-next-line
      }, );
    

    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    
    return (
        

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h6>{props.heading}</h6>
            <div className='mb-3'>
                <textarea className="form-control" id="textbox" rows="5" onChange={handleOnChange} value={text} placeholder='Start typing...' ></textarea>
                <div className="container my-2">
                    <button className='btn btn-primary mx-2' onClick={uppercaseclick} >Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={lowercaseclick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={clearclick}>Clear Text</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={copyclick}>Copy Text</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={extraspaceremoveclick}>Remove extra space</button>
                </div>
                <div className="container my-3">
                    <h6>Text Summary</h6>

                    <p>Word Count: {wordCount}  Characters (including white space): {text.length}</p>
                </div>
                <div className="container mb-2">
                    <h6>Preview</h6>
                    <p>{text}</p>
                </div>
            </div>
        </div>
        
    )
}