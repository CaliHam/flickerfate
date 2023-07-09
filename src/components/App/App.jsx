import './App.css';
import { useState } from 'react';
import Form from '../Form/Form'
import Response from '../Response/Response';

const App = () => {

  const [submitted, setSubmitted] = useState(null)

  return (
    <div className="App">
      <h1>FlickerFate</h1>
      <h2><b>Rules:</b> Ask a yes-or-no question and fate will decide your response!</h2>
      <Form submitted={submitted} setSubmitted={setSubmitted}/>
      {submitted && <Response question={submitted}/>}
    </div>
  );
}

export default App;
