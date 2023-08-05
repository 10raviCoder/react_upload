import React from 'react'
import {WiCloud} from "react-icons/wi"
import {IoIosSearch} from "react-icons/io"
import {useEffect,useState} from "react"
import axios from 'axios'

const Place = () => {

    const [Weather, setWeather] = useState({})
    const city = "ghaziabad"
    
    useEffect(() => {

    const fetchWeather = async ()=>{

    try {

      const {data}=  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a20724ad38211deda3875d71f6a13f0f`)

      console.log(data)
      setWeather(data)
 
          
      }   catch (error) {
          console.log("error")
        }

      }
      fetchWeather();
      
    },[])

  return (
    <div className='vip'>

        <div id='cloud'>
            
            <p> <WiCloud/></p>
             
             <h1>
             {/* {weather[0].main} */}
            </h1>
            </div>
       
        
            <div className="city">
            <input className ="text" type="text" placeholder='Search any city'/>
            <p><IoIosSearch/></p>
            </div> 
      
      <div className="live">

      <div className="name">
        <p>{Weather.name},IN</p>
        </div>

        <div className="details">

        
            <div className="tempe">
                <p1>Temperature</p1>
                <p> {Weather.main.temp_max}</p>
            </div>
            <div className="humi">
                <p1>Humidity</p1>
                <p>{Weather.main.humidity}</p>
            </div>
            <div className="visi">
                <p1>Visibility</p1>
                <p>{Weather.visibility}</p>
            </div>
            <div className="wind">
                <p1>Wind Speed</p1>
                <p>{Weather.wind.speed}</p>
            </div>
        </div>

    

    </div>
    </div>
  )
}

export default Place