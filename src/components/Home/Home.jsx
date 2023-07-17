import React from 'react'
import './Home.css'
import Form from '../Form/Form';
import Response from '../Response/Response';
import { Link } from 'react-router-dom';

const Home = ({submitted, answer, saved, updateSaved, question, handleQuestion, submitQuestion}) => {

  return (
    <div className="Home">
			<h2>Ask a yes-or-no question and fate will decide your response!</h2>
      <Form question={question} handleQuestion={handleQuestion} submitQuestion={submitQuestion}/>
      <nav className='btns-nav'>
        {!!saved.length && <Link to="/saved"><button>View Saved</button></Link>}
        {submitted && <button onClick={updateSaved}>Save</button>}
      </nav>
      {submitted && <Response submitted={submitted} answer={answer}/>}
    </div>
  )
}

export default Home