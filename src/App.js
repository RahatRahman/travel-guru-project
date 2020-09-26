import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import TravelDetails from "./components/TravelDetails/TravelDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <TravelDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:startBooking">
            <Booking />
          </Route>
          <Route exact path="/">
            <TravelDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
