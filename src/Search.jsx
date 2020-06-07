import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

// eslint-disable-next-line react/prefer-stateless-function
export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <div>
          {preload.shows.map((show) => (
            <ShowCard key={show.imdbID} {...show} />
          ))}
        </div>
      </div>
    );
  }
}
