import React from 'react'

 export default class Name extends React.Component {
    render() {
  
      let x
      if(this.props.otherVal>100) {
        x = "Greater than 100"
      } else {
        x = "Less than 100"
      }
  
  
  return (
  
      <div>
        <h2> {this.props.value} </h2>
        <div>{this.props.otherVal}</div>
        <div>{x}</div>
      </div>
        );
    }
        
  }
   
//   export default Name;
  
export class Counter extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            counter: 0
        }
        this.onBtnClick=this.onBtnClick.bind(this)
    }

    componentDidMount() {
        let name = sessionStorage.getItem("counter")
        this.setState({counter:parseInt(name)})

    }
    

    onBtnClick=function(){
    // onBtnClick =()=>{
        let cur = this.state.counter
        this.setState({counter:cur+1})
        sessionStorage.setItem("counter", cur+1)
        // sessionStorage.setItem("name", "Saurav")
        // let name = sessionStorage.getItem("name")
        // // alert("button Clicked")

    }


    render() {
        return(
            <div>
                <h1>Counter Value is {this.state.counter} </h1>
                <button onClick={this.onBtnClick}>Increase</button>
            </div>
        );
    }
}