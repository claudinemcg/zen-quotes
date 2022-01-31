import React, { Component} from 'react';
import axios from 'axios';
import "./ZenQuote.css"

class ZenQuote extends Component {
    constructor(props){
        super(props);
        this.state = {quote:"", isLoaded: false}
    }
    
    
    componentDidMount() {
        // load data
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
    render() {
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