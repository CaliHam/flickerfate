import './Form.css';
import { useState } from 'react';
import { getAnswer } from '../../apicalls/apicalls'
import Response from '../Response/Response';

const Form = () => {

    // const [result, setResult] = useState('')
    
    const showResult = () => {
        // getAnswer.then(data => setResult(data))
    }

    return (
        <form>
            <input placeholder='Ask your question here'></input>
            <button type='submit' onClick={showResult()}>Submit</button>
            {/* <Response result={result} /> */}
        </form>
    )
}

export default Form;