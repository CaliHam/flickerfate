import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import History from '../History/History';
import Home from '../Home/Home';

const App = () => {

  const [submitted, setSubmitted] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [saved, setSaved] = useState([])
  const [question, setQuestion] = useState('')

  const updateSaved = () => {
    const savedQA = {question: submitted, answer: answer.answer, image: answer.image, id: Date.now()}
    setSaved([...saved, savedQA])
  }

  const submitQuestion = (e) => {
    e.preventDefault()
    setSubmitted(question)
    setQuestion('')
  }

  return (
    <div className='App'>
      <h1>FlickerFate</h1>
      <Routes>
        <Route path="/" element={<Home submitted={submitted} setSubmitted={setSubmitted} answer={answer} setAnswer={setAnswer} saved={saved} updateSaved={updateSaved} question={question} setQuestion={setQuestion} submitQuestion={submitQuestion}/>}/>
        <Route path="/saved" element={<History saved={saved} setSubmitted={setSubmitted}/>}/>
      </Routes>
    </div>
  );
}

export default App;
