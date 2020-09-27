import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Room from "./components/Room/Room";
import TravelDetails from "./components/TravelDetails/TravelDetails";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p style={{ color: "black" }}>Name: {loggedInUser.name}</p> */}
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
            <PrivateRoute path="/room/:bookRoom">
              <Room />
            </PrivateRoute>
            <Route exact path="/">
              <TravelDetails />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
