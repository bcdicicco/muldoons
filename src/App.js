import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Menu from "./components/menu";
import Home from "./components/home";
import StoreInfo from "./components/storeInfo";
import Gallery from "./components/gallery";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/menu" component={Menu} />
            <Route path="/info" component={StoreInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
