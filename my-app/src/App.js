import React from 'react';
import Name,{Counter} from './components'
import Api from './ApiComponent'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
    <h1> Hello World </h1>
    </div>
    <Name value={"Saurav"} otherVal={123}/>
    <Counter/>
    <Api></Api>
    </div>
    
  );
}

// class Name extends React.Component {
//   render() {

//     let x
//     if(this.props.otherVal>100) {
//       x = "Greater than 100"
//     } else {
//       x = "Less than 100"
//     }


// return (

//     <div>
//       <h2> {this.props.value} </h2>
//       <div>{this.props.otherVal}</div>
//       <div>{x}</div>
//     </div>
// );
//       }

// }



export default App;
