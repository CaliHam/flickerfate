import './Response.css'

const Response = ({ submitted, answer }) => {

    const renderResponse = () => {
        return (
            <div className='response-container'>
                <p><span><b>You asked:</b> {submitted}</span></p>
                <img src={answer.image}></img>
                <p><span><b>Answer:</b> {answer.answer}</span></p>
            </div>
        )
    }

    return (
        <>{!submitted ? 'Loading' : renderResponse()}</>
    )
}

export default Response;