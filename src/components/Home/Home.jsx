import React from 'react'
import './Home.css'
import Form from '../Form/Form';
import Response from '../Response/Response';
import { Link } from 'react-router-dom';

const Home = ({submitted, setSubmitted, answer, setAnswer, saved, updateSaved}) => {
  return (
    <div className="Home">
      <Form submitted={submitted} setSubmitted={setSubmitted}/>
      <nav className='btns-nav'>
        {!!saved.length && <Link to="/saved"><button>View Saved</button></Link>}
        {submitted && <button onClick={updateSaved}>Save</button>}
      </nav>
      {submitted && <Response question={submitted} answer={answer} setAnswer={setAnswer}/>}
    </div>
  )
}

export default Home