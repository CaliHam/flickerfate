import './Form.css';
import { useState } from 'react';


const Form = ({ submitted, setSubmitted }) => {

    const [question, setQuestion] = useState('')


    const submitQuestion = (e) => {
        e.preventDefault()
        setSubmitted(question)
        clearInput()
    }

    const clearInput = () => {
        setQuestion('')
    }

    return (
        <form>
            <input placeholder='Ask your question here' value={question} onChange={e => setQuestion(e.target.value)}></input>
            <button type='submit' onClick={e => submitQuestion(e)}>Submit</button>
        </form>
    )
}

export default Form;