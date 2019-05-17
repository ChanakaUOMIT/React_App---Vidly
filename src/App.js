import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rental} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
