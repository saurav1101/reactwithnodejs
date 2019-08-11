import React from 'react'
import axios from 'axios'

export default class ApiComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            matches:[]

        }
    }

    // incr = x = (a, b) => (a + b)

    componentDidMount() {
        axios.get("https://www.scorebat.com/video-api/v1/").then((resp) => {
            console.log(resp.data)
            this.setState({matches:resp.data})
        })
    }

    render() {
        return(
            <div>
                <ul>
                {this.state.matches.map(a=>(<li>{a.title}</li>))}
                </ul>
            </div>
        );
    }
}