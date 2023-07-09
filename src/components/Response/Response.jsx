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
                <p>You asked: {question}</p>
                <img src={answer.image}></img>
                <p>Answer: {answer.answer}</p>
            </div>
        )
    }

    return (
        <>{!answer ? 'Loading' : renderResponse(answer)}</>
    )
}

export default Response;