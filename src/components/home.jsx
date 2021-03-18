import React, { Component } from "react";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { FacebookProvider, Page } from 'react-facebook';
import { Jumbotron } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../css/home.css";
import bbq from "../bbqChicken.jpg";
import meat from "../meatPizza.jpg";

export default class Home extends Component {
  render() {
    return (
      <div id="fullPage">
        <div id="imageCarousel">
          <Carousel interval={5000} fade={false} indicators={true}>
            <Carousel.Item>
              <img className="mx-auto d-block w-50" src={bbq} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="mx-auto d-block w-50" src={meat} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="mx-auto d-block w-50" src={bbq} alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="fbFeed">
          <FacebookProvider appId="270108797657439">
            <Page href="https://www.facebook.com/muldoonslondon" tabs="timeline" />
          </FacebookProvider>
        </div>
      </div>
    );
  }
}
  // state = {};

  // loadFbLoginApi() {
  //   window.fbAsyncInit = function () {
      
  //     window.FB.init({
  //       appId: 270108797657439,
  //       cookie: true, // enable cookies to allow the server to access
  //       // the session
  //       xfbml: true, // parse social plugins on this page
  //       version: "v2.5",
  //     });

  //   };

  //   console.log("Loading fb api");
  //   // Load the SDK asynchronously
  //   (function (d, s, id) {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "//connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "facebook-jssdk");

    
  // }
  // componentDidMount() {
  //   this.loadFbLoginApi();
  // }

  // render() {
  //   console.log("Render for home form")
  //   return (
  //     <div>
  //       <div
  //         className="fb-page"
  //         data-href="https://www.facebook.com/muldoonslondon"
  //         data-tabs="timeline"
  //         data-width="400"
  //         data-height="600"
  //         data-small-header="true"
  //         data-adapt-container-width="true"
  //         data-hide-cover="false"
  //         data-show-facepile="false"
  //       >
  //         <blockquote
  //           cite="https://www.facebook.com/muldoonslondon"
  //           className="fb-xfbml-parse-ignore"
  //         >
  //           <a href="https://www.facebook.com/muldoonslondon">
  //           Muldoon&#039;s Pizza
  //           </a>
  //         </blockquote>
  //       </div>
  //     </div>
  //   );
  // }

