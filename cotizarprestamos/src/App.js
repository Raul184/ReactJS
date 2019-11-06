import React from 'react';
import './normalize.css';
import './skeleton.css';
import './app.css';
//comp
import Form from './components/Form';

function App() {
  const calc = (x) => {
    let totalC , totalP,result;
    if(Number(x) <= 1000){
    totalC = x * .25;
      totalP = x * 0.1;
    }
    else if(Number(x) > 5000){
      totalC = x * .20;
      totalP = x * 0.2;
    }
    else if(Number(x) > 10000){
      totalC = x * .15;
      totalP = x * 0.3;
    }
    result = totalP + totalC + Number(x);
    console.log(result);
  }
  return (
    <div className="App">
      <h1>Loans Calculator</h1>
      <Form  calculo={calc}/>
    </div>
  );
}

export default App;
