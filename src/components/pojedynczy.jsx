import React from "react";
import "../style.css";
import ReactDOM from "react-dom";
import "../style.css";

let licznik = 0;

class Pojedynczy extends React.Component {
  constructor(props) {
    super(props);
    this.removes = this.removes.bind(this);
  }
  removes() {
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
        hours = "0" + hours;
      }

      let minutes = Math.floor(time / 60);
      time -= minutes * 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      let seconds = time;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      let s = `<div class='row'>`;
      let c = "</div>";
      let x = hours + ":" + minutes + ":" + seconds;
      let y = `<i class='fa fa-remove'></i>`;
      let binding = s + x + y + c;
      let query1 = document.querySelector(".query");
      query1.innerHTML += binding;
      let sr=document.getElementsByClassName("fa-remove");
      let dr=document.getElementsByClassName("row");
      console.log(sr,dr);

      for (let i=0;i<sr.length;i++)
      {
        console.log(sr.item(i),dr.item(i));
        sr.item(i).addEventListener("click",function(){
          dr.item(i).style.display="none";
        })
      }

    };



    licznik++;

    ourRequest.send();
  }



  render() {
    return (
      <div>
        <div className="click" onClick={this.removes}>
          <div>Render new time</div>
        </div>
        <div className="lista">
          <div className="query" ></div>
        </div>
      </div>
    );
  }
}

export default Pojedynczy;
