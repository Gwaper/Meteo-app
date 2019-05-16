import React, {Component} from 'react';
import './Weather.css';

// let apiKey=e08cf8ebbd8b86614d89966944fdc934

let day = da
class Weather extends Component {
    constructor() {
        super ();
        this.state ={
            lat: 0,
            long:0,
            temp: 0,
            humidity: 0,
            windspeed: 0,
            cityName: '',
            weatherDay:'',
            weathericon:''
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((succes)=>{
            this.setState({
                lat: succes.coords.latitude,
                long: succes.coords.longitude
            })
            
            fetch(`https:api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=e08cf8ebbd8b86614d89966944fdc934`)
            .then(res => res.json())
            .then((res)=>{
                this.setState({
                    weatherDay: res.weather[0].main,
                    cityName: res.name,
                    temp: Math.round(res.main.temp-273.15),
                    windspeed:res.wind.speed,
                    humidity: res.main.humidity,
                    weathericon: res.weather[0].icon


                })
                console.log(res)
            })
                
                

        }, (error)=>{
            console.log('error')

        }
        
        )
    }
    // let tempCelsius= (`${this.state.temp}-32)*(5/9`)
    render(){
        return(
            <div>
                <h1>Meteo of the day</h1>
                <div className='bg_day1'>
                <div className='localisation'>
                    <p className='city_name'>{this.state.cityName}</p>
                    <p className='lat_long'>lat:{this.state.lat}</p>
                    <p className='lat_long'>long:{this.state.long}</p> 
                </div>
                    <p className='primary_info'>{this.state.weatherDay}</p>
                    
                    
                <img className='icon_temp' src={`http://openweathermap.org/img/w/${this.state.weathericon}.png`}/>
                <p className='primary_info'>{this.state.temp} °</p>
                    
                    <p className='secondary_info'>{this.state.humidity}</p>
                    <p className='secondary_info'>{this.state.windspeed}</p>
                    <p>manger des fibres de choux</p>
                </div>
            </div>
        )
    }
}

export default Weather;

