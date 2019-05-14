class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <Machine
          s1={8}    //props in Components
          s2={7}
          s3={10}
        />
      </div>
    )
  }
}


//Render

ReactDOM.render( <App/> , document.getElementById('root'));