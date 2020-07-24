import React, { useState } from 'react';

const api = {
  key: process.env.REACT_APP_OWM_KY,
  base: process.env.REACT_APP_OWM_URL
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => { 
          setWeather(result);
          setQuery('');
          console.log(result);
      })
    }
  }

  const dateBuilder = (dt) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[dt.getDay()];
    let date = dt.getDate();
    let month = months[dt.getMonth()];
    let year = dt.getFullYear();

    return `${day}, ${month} ${date} ${year}`
  }

  return (
    </div>
  );
}

export default App;
