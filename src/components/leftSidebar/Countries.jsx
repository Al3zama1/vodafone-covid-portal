import React, { useState, useEffect } from "react";
import Country from "./Country";
import * as d3 from "d3";

function Countries({ data, handleClick, selected }) {
  return data.map((country) => {
    return (
      <Country
        selected={selected}
        handleClick={handleClick}
        key={country.country}
        country={country}
      />
    );
  });
}

export default Countries;
