import './App.css';
import { useState } from 'react';
import Form from '../Form/Form'

const App = () => {


  return (
    <div className="App">
      <h1>FlickerFate</h1>
      <h2><b>Rules:</b> Ask a yes-or-no question and fate will decide your response!</h2>
      <Form />
    </div>
  );
}

export default App;
