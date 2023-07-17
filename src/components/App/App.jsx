import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import History from '../History/History';
import Home from '../Home/Home';
import { getAnswer } from '../../apicalls/apicalls'

const App = () => {

  const [submittedQA, setSubmittedQA] = useState({submitted: null, answer: null})
  const [saved, setSaved] = useState([])
  const [question, setQuestion] = useState('') 

  const updateSaved = () => {
    const savedQA = {question: submittedQA.submitted, answer: submittedQA.answer.answer, image: submittedQA.answer.image, id: Date.now()}
    setSaved([...saved, savedQA])
  }

  const submitQuestion = (e) => {
    e.preventDefault()
    generateResponse(question)
    setQuestion('')
  }

  const generateResponse = (question) => {
		getAnswer().then(data => {
      setSubmittedQA({...submittedQA, submitted: question, answer: data})})
		.catch(err => console.log(err))
	}

  const handleQuestion = (e) => {
    e.preventDefault()
    setQuestion(e.target.value)
  }

  return (
    <div className='App'>
      <h1>FlickerFate</h1>
      <Routes>
        <Route path="/" element={<Home submitted={submittedQA.submitted} answer={submittedQA.answer} saved={saved} updateSaved={updateSaved} question={question} handleQuestion={handleQuestion} submitQuestion={submitQuestion}/>}/>
        <Route path="/saved" element={<History saved={saved} submittedQA= {submittedQA} setSubmittedQA={setSubmittedQA}/>}/>
      </Routes>
    </div>
  );
}

export default App;
