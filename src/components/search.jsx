import React from "react";
import "./search.css";

const Search = props => {
    return (
        <div>
          <form onSubmit={props.loadweather}>
              <div>
                  <div> <input type="text" name="city" className="search" placeholder="City" /> </div>
                  <div> <input type="text" name="country" className="search" placeholder="Country" />  </div>
                </div>
                <div>{props.error ? err() : ""}</div>
                <div> <button>Show me weather</button> </div>
            </form>
        </div>
    );
};

const err = props => {
  return (
    <div role="alert"> Enter city and country! </div>
  );
};

export default Search;
   