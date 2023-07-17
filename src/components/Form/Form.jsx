import './Form.css';
import { useState } from 'react';


const Form = ({ question, setQuestion, submitQuestion }) => {

    return (
        <form>
            <input placeholder='Ask your question here' value={question} onChange={e => setQuestion(e.target.value)}></input>
            <button type='submit' onClick={e => submitQuestion(e)}>Submit</button>
        </form>
    )
}

export default Form;