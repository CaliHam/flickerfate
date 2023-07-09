import { useEffect, useState } from 'react';
import './Response.css'
import { getAnswer } from '../../apicalls/apicalls'


const Response = ({ question }) => {

    const [answer, setAnswer] = useState(null)

    useEffect(() => {
        getAnswer().then(data => setAnswer(data))
        .catch(err => console.log(err))
    }, [question])

    const renderResponse = (answer) => {
        return (
            <div className='response-container'>
                <p>{answer.answer}</p>
                <img src={answer.image}></img>
            </div>
        )
    }

    return (
        <>{!answer ? 'Loading' : renderResponse(answer)}</>
    )
}

export default Response;