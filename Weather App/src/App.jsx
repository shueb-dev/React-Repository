import { useState } from "react";
async function getWeather(city) {
  const url = `https://wttr.in/${city}?format=j1`;
  const response = await fetch(url);

  const data = await response.json();

  // console.log(data);

  // const tempc = data.current_condition[0].temp_C;
  // console.log(tempc);

  // const feelsLke = data.current_condition[0].FeelsLikeC;
  // console.log(feelsLke);

  // const weatherDes = data.current_condition[0].weatherDesc[0].value;
  // console.log(weatherDes);

  return data;
}

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function search() {
    getWeather(city).then((data) => setWeather(data));
    setLoading(true);
  }

  return (
    <div className="conatiner  col-4 m-auto p-4 mt-4 ">
      <div className="d-flex mb-4 gap-2 ">
        <input
          className="input border-primary rounded-2"
          type="text"
          value={city}
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-success" onClick={search}>
          Search
        </button>
      </div>
      {weather && (
        <div
          className="card text-bg-success mb-3"
          style={{ width: "16rem", textAlign: "center" }}
        >
          <div className="card-header">{city}</div>
          <div className="card-body">
            <h5 className="card-title">
              {weather.current_condition[0].FeelsLikeC}
            </h5>
            <p className="card-text">
              {weather.current_condition[0].weatherDesc[0].value}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
