import React, {Component} from 'react';
import './Weather.css';
import axios from 'axios';

// let apiKey=e08cf8ebbd8b86614d89966944fdc934
//  key accuweather= cvbBLx1FFQQXtKEgqU4o6KATicAkNsYn

// let day = da
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
            weathericon:'',
            nexttemp:0,
            nextWeatherDay:'',
            nextWeatherIcon:''

        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((succes)=>{
            this.setState({
                lat: succes.coords.latitude,
                long: succes.coords.longitude
            })
            
            axios.get(`https:api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=ca7078392c7ff5f715685bc5444efe68`)
            .then((res) =>{
                console.log(res)
                this.setState({
                    weatherDay: res.data.weather[0].main,
                    cityName: res.data.name,
                    temp: Math.round(res.data.main.temp-273.15),
                    windspeed:res.data.wind.speed,
                    humidity: res.data.main.humidity,
                    weathericon: res.data.weather[0].icon,
                    nextWeatherDay:res.data.weather[1].main
                })
                
            })
        }, (error)=>{
            console.log('error')
        }
        )
    }
    // let tempCelsius= (`${this.state.temp}-32)*(5/9`)
    render(){
        return(
            <div className='bgpage'>
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
                    <p>{this.state.nextWeatherDay}</p>
                </div>
            </div>
        )
    }
}

export default Weather;

