import './History.css'

const History = ({ saved, goHome }) => {

    const viewSaved = saved.map(prophecy => {
        return (
            <>
                <button onClick={goHome}>Back</button>
                <div className='response-container' key={prophecy.id}>
                    <p>You asked: {prophecy.question}</p>
                    <img src={prophecy.image}></img>
                    <p>Answer: {prophecy.answer}</p>
                </div>
            </>
        )
    })

    return (
        <>{saved && viewSaved}</>
    )
}

export default History;