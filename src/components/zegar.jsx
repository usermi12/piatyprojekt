import React from "react";
import ReactDOM from "react-dom";
import "../style.css";


const Zegar=()=>
{
  let x;
    setTimeout(Zegar, 1000);
    let ourRequest = new XMLHttpRequest();
    let time;
    ourRequest.open("GET", "http://worldclockapi.com/api/json/cet/now");
    ourRequest.onload = function funkcja() {
      let ourData = JSON.parse(ourRequest.responseText);
      time = ourData.currentFileTime;
      time = Math.floor(time / 10000000);
      time %= 86400;
      //console.log(time);
      let hours = Math.floor(time / 3600);
      time -= hours * 3600;
      if (hours < 10) {
        hours = '0' + hours;
      }

      let minutes = Math.floor(time / 60);
      time -= minutes * 60;
      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      let seconds = time;
      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      let x = hours + ':' + minutes + ':' + seconds;
      document.querySelector(".zegar").innerHTML = "Aktualna godzina: " + x;
      // console.log(time);
    }

    ourRequest.send();




  return <div className="zegar">Loading...</div>;
}

export default Zegar;
