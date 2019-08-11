import React from 'react'
import axios from 'axios'

export default class SearchComponenet extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:"",
            result:""
        }
    }

    onChange=(e)=>{
        this.setState({inputValue:e.target.value})
    }

    onSearch=()=>{
        // for post--- use

        // let data = {
        //     name:"Saurav",
        //     age:12
        // }

        axios.get("https://dog.ceo/api/breeds/image/random?q="+this.state.inputValue).then((resp)=>{
            this.setState({result:resp.data.message})
        })

    }

    render()
    {
        return(
            <div>
                <input onChange={this.onChange} value={this.state.inputValue}></input>
                <button onClick={this.onSearch}> Search </button>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }
}