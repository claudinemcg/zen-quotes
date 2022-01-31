import React, { Component} from 'react';
import axios from 'axios';
import "./ZenQuote.css"

class ZenQuote extends Component {
    constructor(props){
        console.log("INSIDE CONSTRUCTOR");
        super(props);
        this.state = {quote:"", isLoaded: false}
    }
    
    
    componentDidMount() {
        // load data
        console.log("INSIDE COMPONENT DID MOUNT");
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function() {
                    this.setState({ quote: response.data, isLoaded: true });
                }.bind(this),
                3000 
            );
        });
        // set state with data
    }

    componentDidUpdate() {
        console.log("INSIDE COMPONENT DID UPDATE");
    }
    render() {
        console.log("INSIDE RENDER");
        if (this.state.isLoaded){
        return (
            <div>
                    <h1>Always remember ....</h1>
                    <p>{this.state.quote}</p>
                    <p>-----------------</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className='loader'></div>
            </div>
        )
    }

}
}

export default ZenQuote;