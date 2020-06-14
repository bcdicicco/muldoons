import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class StoreInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Store Info </h1>

        <table className="table table-dark table-sm" style={{ width: "25vw" }}>
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

        <a href="https://www.facebook.com/muldoonslondon/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    );
  }
}

export default StoreInfo;
