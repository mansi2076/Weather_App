import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

import "./InfoBox.css";

export default function InfoBox({info}){

    const INT_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZldyUyMGNsb3VkcyUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"

    const HOT_URL = "https://media.istockphoto.com/id/1337229800/photo/sunset-scene-behind-the-building.webp?b=1&s=170667a&w=0&k=20&c=RO1Nwg2cU2zQ4LXTgZ0FMY1biDjw-na-9oXUR3qZmq4=";
    const COLD_URL = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?b=1&s=170667a&w=0&k=20&c=DHrXh8fFW_33CVy5603IOswob8aYeWWMLXlSEXKsomI=";
    return(
        <div className="InfoBox">

          <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         {info.humidity >80 ? <ThunderstormIcon/>: (info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p> Temprature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p> 
          
            <p> MinTemp = {info.min_temp}</p>
            <p> MaxTemp = {info.max_temp}</p>
            <p> The Weather can be described as<i><b> {info.weather}</b></i>  and feels like= {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

    </div>
)
}