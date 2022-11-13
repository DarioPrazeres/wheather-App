import cloudDay from  "./icon/cloudy-day.svg";
import sun from  "./icon/sun.svg";
import rainy from  "./icon/rainy.svg";
import snow from  "./icon/snow.svg";
import moon from  "./icon/moon.svg";
import cloudNight from   "./icon/cloudy-night.svg";
import mist from "./icon/mist.svg";
export default cloudStatus;

const data = new Date();
const hour = data.getHours()

function cloudStatus(statusTemp, classli){
    const cloud = document.createElement('img');
    cloud.classList.add(classli);
    if(hour >= 5 && hour < 18){
        switch(statusTemp){
            case 'Clear': cloud.src = sun; break;
            case 'Clouds': cloud.src = cloudDay; break;  
            case 'Rain': cloud.src = rainy; break;
            case 'Snow': cloud.src = snow; break;
            case 'Mist': cloud.src = mist; break;
        }
    }else{
        switch(statusTemp){
            case 'Clear': cloud.src = moon; break;
            case 'Clouds': cloud.src = cloudNight; break; 
            case 'Rain': cloud.src = rainy ; break;
            case 'Snow': cloud.src = snow; break;
            case 'Mist': cloud.src = mist; break;
        }
    }
    return cloud;
}




