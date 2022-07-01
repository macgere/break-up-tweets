import './App.css';
import { useEffect, useState } from 'react';
import Tweet from './Tweet';

function App() {
  const [ogText, setOgText] = useState('')
  const [ogTextLength, setOgTextLength] = useState(0)
  const [slicedText, setSlicedText] = useState([])
  const [allTweets, setAllTweets] = useState('')


  const breakUp = (ogText) => {
    if (ogText.length === 0) return [];
    return [ogText.slice(0, 240)].concat(breakUp(ogText.slice(240)))
  }


  const blurEffect = (e) => {
    setOgText(e.target.value)
  }

  useEffect(
    () => {
      let textLength = ogText.length
      setOgTextLength(textLength)
    }, [ogText]
  )

  const clear = () => {
    setOgText('')
    const textarea = document.getElementById('originalText')
    textarea.value = ''
  }


  return (
    <div className="App">
      <textarea className='originalText' onBlur={(e) => blurEffect(e)}></textarea>
      <br></br>
      <button onClick={breakUp}>Break Up Into Tweets</button>
      <br></br>
      <button onClick={clear}>Clear</button>
      <p>{ogTextLength}</p>
      <div>
        {allTweets}
      </div>
    </div>
  );
}

export default App;
