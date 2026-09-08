import React, { useState } from "react";

async function getCountry(country) {
  const url = `https://countries-api.davegarvey.workers.dev/search?q=${country}`;

  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}

function App() {
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const [region, setRegion] = useState("");

  async function search() {
    const data = await getCountry(country);
    const countryData = data.results[0];
    // console.log(countryData);

    const countryName = countryData.name;
    setCountry(countryName);
    const population = countryData.population;
    setPopulation(population);
    const region = countryData.region;
    setRegion(region);
    // console.log(countryName);
    // console.log(population);
    // console.log(region);
  }

  return (
    <div className="container col-6 my-auto mt-4 border border-primary p-6">
      <h2>The Country</h2>

      <div className="d-flex gap-2">
        <input
          type="country"
          value={country}
          className="form-control"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button onClick={search} className="btn btn-success">
          Search
        </button>
      </div>

      {country && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col">Population</th>
              <th scope="col">Region</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{country}</td>
              <td>{population}</td>
              <td>{region}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
