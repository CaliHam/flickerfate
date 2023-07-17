import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import History from '../History/History';
import Home from '../Home/Home';


const App = () => {

  const [submitted, setSubmitted] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [saved, setSaved] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [showForm, setForm] = useState(true)

  // const viewHistory = () => {
  //   setShowHistory(true)
  //   setSubmitted(null)
  //   setForm(false)
  // }

  // const goHome = () => {
  //   setShowHistory(false)
  //   setForm(true)
  // }

  const updateSaved = () => {
    const savedQA = {question: submitted, answer: answer.answer, image: answer.image, id: Date.now()}
    setSaved([...saved, savedQA])
}

  return (
    <div className='App'>
      <h1>FlickerFate</h1>
      <h2>Ask a yes-or-no question and fate will decide your response!</h2>
      <Routes>
        <Route path="/" element={<Home submitted={submitted} setSubmitted={setSubmitted} answer={answer} setAnswer={setAnswer} saved={saved} updateSaved={updateSaved}/>}/>
        <Route path="/saved" element={<History saved={saved}/>}/>
      </Routes>
    </div>
  );
}

export default App;
