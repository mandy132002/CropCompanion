import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const [k, setK] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [ph, setPh] = useState(0);
  const [rainfall, setRainfall] = useState(0);
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = [n, p, k, temperature, humidity, ph, rainfall];
    const response = await axios.post('http://localhost:5000/predict', { input });
    setResult(response.data.result);
    console.log(response.data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="n"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
        <input
          type="number"
          placeholder="p"
          value={p}
          onChange={(e) => setP(e.target.value)}
        />
        <input
          type="number"
          placeholder="k"
          value={k}
          onChange={(e) => setK(e.target.value)}
        />
        <input
          type="number"
          placeholder="temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <input
          type="number"
          placeholder="humidity"
          value={humidity}
          onChange={(e) => setHumidity(e.target.value)}
        />
        <input
          type="number"
          placeholder="ph"
          value={ph}
          onChange={(e) => setPh(e.target.value)}
        />
        <input
          type="number"
          placeholder="rainfall"
          value={rainfall}
          onChange={(e) => setRainfall(e.target.value)}
        />
        <button type="submit">Predict</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
};

export default App;
