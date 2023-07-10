import './App.css';
import { useState } from 'react';
import Form from '../Form/Form';
import History from '../History/History';
import Response from '../Response/Response';

const App = () => {

  const [submitted, setSubmitted] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [saved, setSaved] = useState([])
  const [showHistory, setShowHistory] = useState(false)

  const viewHistory = () => {
    setShowHistory(true)
    setSubmitted(null)
  }

  const updateSaved = () => {
    const savedQA = {question: submitted, answer: answer.answer, image: answer.image, id: Date.now()}
    setSaved([...saved, savedQA])
}

  return (
    <div className="App">
      <h1>FlickerFate</h1>
      <h2><b>Rules:</b> Ask a yes-or-no question and fate will decide your response!</h2>
      <Form submitted={submitted} setSubmitted={setSubmitted}/>
      {!!saved.length && <button onClick={viewHistory}>History</button>}
      {submitted && <button onClick={updateSaved}>Save</button>}
      {submitted && <Response question={submitted} answer={answer} setAnswer={setAnswer}/>}
      {showHistory && <History saved={saved}/>}
    </div>
  );
}

export default App;
