import React from "react";
import "./weather.css";

const Weather = props => {
    return (
        <div>
          <div>
              <h1>{props.cityname}</h1>
              <h5>  <i className={`wi ${props.weatherIcon}`} /> </h5>
                {props.temp_celsius ? (<h1>{props.temp_celsius}&deg;</h1>) : null}
                <h4 className="description"> {props.description} </h4>
            </div>
        </div>
    );
};

export default Weather;
