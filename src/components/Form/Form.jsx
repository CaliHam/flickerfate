import './Form.css';
import { useState } from 'react';


const Form = ({ question, handleQuestion, submitQuestion }) => {

    return (
        <form>
            <input placeholder='Ask your question here' value={question} onChange={e => handleQuestion(e)}></input>
            <button type='submit' onClick={submitQuestion}>Submit</button>
        </form>
    )
}

export default Form;