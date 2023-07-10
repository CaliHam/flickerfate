import './History.css'

const History = ({ saved }) => {

    const viewSaved = saved.map(blob => {
        return (
            <div className='response-container' key={blob.id}>
                <p>You asked: {blob.question}</p>
                <img src={blob.image}></img>
                <p>Answer: {blob.answer}</p>
            </div>
        )
    })

    return (
        <>{saved && viewSaved}</>
    )
}

export default History;