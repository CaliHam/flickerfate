import { useEffect, useState } from 'react';
import './Response.css'
import { getAnswer } from '../../apicalls/apicalls'

const Response = ({ question, answer, setAnswer }) => {

    useEffect(() => {
        resetAnswer()
        getAnswer().then(data => setAnswer(data))
        .catch(err => console.log(err))
    }, [question])

    const resetAnswer = () => {
        setAnswer(null)
    }

    const renderResponse = (answer) => {
        return (
            <div className='response-container'>
                <p><span><b>You asked:</b> {question}</span></p>
                <img src={answer.image}></img>
                <p><span><b>Answer:</b> {answer.answer}</span></p>
            </div>
        )
    }

    return (
        <>{!answer ? 'Loading' : renderResponse(answer)}</>
    )
}

export default Response;