import React from 'react';
import './normalize.css';
import './skeleton.css';
import './app.css';
//comp
import Form from './components/Form';


function App() {
  const calc = (x) => {
    let totalC , totalP,result;
    if(x <= 1000){
    totalC = x * .25;
    totalP = x * 0.1;
    }
    else if(x >= 5000){
      totalC = x * .20;
      totalP = x * 0.2;
    }
    else if(x <= 100000){
      totalC = x * .15;
      totalP = x * 0.3;
    }
    console.log(totalC , totalP);
    result = totalP + totalC + Number(x);
    console.log(result);
    return result;
  }
  return (
    <div className="App">
      <h1>Loans Calculator</h1>
      <Form  calculo={calc}/>
    </div>
  );
}

export default App;
