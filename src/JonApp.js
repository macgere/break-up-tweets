import { useState, useEffect } from "react";
import React from "react";
import Tweet from "./Tweet";


const stringToSpecificLengthCharacterStringArray = (str, len) => {
    if (str.length === 0) return [];
    return [str.slice(0, len)].concat(stringToSpecificLengthCharacterStringArray(str.slice(len), len));
  }
  
  function JonApp() {
  
    const [sliceLength, setSliceLength] = useState(240);
    const [ogText, setOgText] = useState("Type Here");
    const [slicedText, setSlicedText] = useState([]);
  
    const onChange = (e) => {
      setOgText(e.target.value);
    };
  
    useEffect(
      () => {
        setSlicedText(stringToSpecificLengthCharacterStringArray(ogText, sliceLength));
      },
      [ogText, sliceLength]
    );
  
    const clear = () => {
      setOgText('');
    }
  
    return (
      <div className="App">
        <h1>Break-Up Tweets</h1>
        <h3>break up your longwinded tirade into easily copy-paste-able, bite-sized chunks</h3>
        <textarea value={ogText} className='originalText' onChange={onChange}></textarea>
        <br></br>
        <button onClick={clear}>Clear</button>
        <p>{ogText.length}</p>
        <input type="number" value={sliceLength} onChange={(e) => setSliceLength(e.target.value)} />
        <br />
        {slicedText.map(str => <Tweet str={str}/>)}
      </div>
    );
  }
  
  export default JonApp;
  
  
  
  
  
  
  
  
  
  
  
  
  