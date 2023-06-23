import React, {useState} from 'react'


export default function Textform(props) {
    const uppercaseclick = ()=>{
        // console.log("upper case clicked")
        let newText= text.toUpperCase();
        setText(newText)
    }
    const lowercaseclick = ()=>{
        // console.log("lower case clicked")
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
      <div>
        <h6>{props.heading}</h6>
        <div className='mb 3'>
        <textarea className="form-control" id="textbox" rows="5" onChange={handleOnChange} value={text} placeholder='Start typing...' ></textarea>
        </div>
        <button className='btn btn-primary' onClick={uppercaseclick} >Convert to Uppercase</button>
        <button className='btn btn-primary' onClick={lowercaseclick}>Convert to Lowercase</button>
    </div>
  )
}