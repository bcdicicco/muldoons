import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../css/storeInfo.css";
import uberIcon from "../Uber-Eats-Icon.png";

class StoreInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Store Info </h1>

        <table
          id="hoursTable"
          className="table table-dark table-sm"
          style={{ width: "20vw", float: "right" }}
        >
          <caption style={{ captionSide: "top", textAlign: "center" }}>
            Restaurant Hours
          </caption>
          <thead>
            <tr>
              <th>
                Day <FontAwesomeIcon icon={faCoffee} />
              </th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>4 pm - 9 pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>4 pm - 9 pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>4 pm - 10 pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>4 pm - 10 pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>4 pm - 10 pm</td>
            </tr>
          </tbody>
        </table>

        <a
          href="https://www.facebook.com/muldoonslondon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <p>Phone Number: (519) 471-0607</p>
        <p>Location: 925 Wonderland Rd S, London, ON N6K 3R5</p>
        <p>
          Dine-in and pick-up only. Delivery available through{" "}
          <a href="https://www.ubereats.com/ca/london-ont/food-delivery/muldoons-pizza/0SRoKubgR5up3Y8bmk0zEQ">
            <img src={uberIcon} alt="" width="30" height="30"></img>
          </a>
        </p>
      </div>
    );
  }
}

export default StoreInfo;
