import './History.css'
import { Link } from 'react-router-dom'

const History = ({ saved, submittedQA, setSubmittedQA }) => {

    const clearAnswer = () => {
        setSubmittedQA({...submittedQA, submitted: null})
    }

    const viewSaved = saved.map(prophecy => {
        return (
            <div className='response-container' key={prophecy.id}>
                <p><span><b>You asked:</b> {prophecy.question}</span></p>
                <img src={prophecy.image}></img>
                <p><span><b>Answer:</b> {prophecy.answer}</span></p>
            </div>
        )
    })

    return (
        <>
        <Link to="/"><button onClick={clearAnswer}>Back</button></Link>
        <h2>Saved Prophecies:</h2>
        {viewSaved}
        </>
    )
}

export default History;