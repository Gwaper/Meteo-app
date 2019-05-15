import React, {Component} from 'react';

class Weather extends Component {
    constructor() {
        super ();
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((succes)=>{

        }, (error)=>{
            console.log('error')

        }
        
        )
    }
    render(){
        return(
            <div>
                <p>manger des fibres de choux</p>
            </div>
        )
    }
}

export default Weather;

