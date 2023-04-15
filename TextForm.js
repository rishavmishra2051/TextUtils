import React,{useState} from 'react'
//shift+tab for sequencing line

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText);
        //props.showAlert(" Converted to uppercase","success");
    }
    
    const handleLowClick=()=>{
        //console.log("Uppercase was clicked " + text);
        let newText=text.toLowerCase();
        setText(newText);
        //props.showAlert(" Converted to lowercase","success");
    }

    const handleClear=()=>{
        //console.log("Uppercase was clicked " + text);
        let t="";
        setText(t);
        //props.showAlert(" Text cleared","success");
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        //text.select();//Removable
        navigator.clipboard.writeText(text.value);
        //props.showAlert(" Text copied","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        //props.showAlert(" Extra spaces removed","success");
    }

    const handleOnchange=(event)=>{
        //console.log("Handle Onchange");
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    //const [text,setText] = useState('Enter your text'); For Show Enter your text
    //setText("New text");//Way to change or update the state of text
  return (
    //&nbsp; For adding space between buttons OR we can use mx-2
    <>
    <div className="container" style={{color:'#0d6efd'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-success mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-success mx-2" onClick={handleClear}>Clear</button>
        
    </div>
    <div className="container my-3">
        <h2 style={{color:'#0d6efd'}}>Your text summary</h2>
        <p style={{color: '##85ebbb'}}>{text.split(" ").length} words and {text.length} characters</p>
        <p style={{color: '##85ebbb'}}>{0.008 * text.split(" ").length} minutes required for read</p>
        <h2 style={{color:'#0d6efd'}}>Preview</h2>
        <p style={{color: '##85ebbb'}}>{text.length>0?text:"Enter something in textbox to preview here"}</p>
    </div>
    </>
  )
}

