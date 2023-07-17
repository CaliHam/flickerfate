import './History.css'

const History = ({ saved, goHome }) => {

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
        <button onClick={goHome}>Back</button>
        {saved && viewSaved}
        </>
    )
}

export default History;