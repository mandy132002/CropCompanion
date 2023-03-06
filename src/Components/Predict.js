import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Navbar from './Navbar';

export default function Predict() {
    const [n, setN] = useState(null);
    const [p, setP] = useState(null);
    const [k, setK] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [ph, setPh] = useState(null);
    const [rainfall, setRainfall] = useState(null);
    const [result, setResult] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const input = [n, p, k, temperature, humidity, ph, rainfall];
      const response = await axios.post('http://localhost:5001/predict', { input });
      setResult(response.data.crop);
      console.log(response.data);
    };
  
    return (
      <>
        <Navbar/>
        <div className='mt-10 flex flex-col pl-14'>
          <h1 className='text-4xl mx-auto  font-bold'>Lets </h1>
          <h1 className='text-7xl mx-auto font-extrabold'>Predict!</h1>
        </div>
        
        <div className='mt-10 pl-20 pr-20 flex '>
          <img className='w-96' src="/images/undraw_japan_ubgk.svg" alt="" />
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <input
            className="border border-black p-3 rounded-md w-2/4 mx-auto mt-3 hover:bg-green-200"
            type="number"
            placeholder="N"
            value={n}
            onChange={(e) => setN(e.target.value)}
          />
          <input
            className="border border-black p-3 rounded-md w-2/4 mx-auto mt-3 hover:bg-green-200"
            type="number"
            placeholder="P"
            value={p}
            onChange={(e) => setP(e.target.value)}
          />
          <input
            className="border border-black p-3 rounded-md w-2/4 mx-auto mt-3 hover:bg-green-200"
            type="number"
            placeholder="K"
            value={k}
            onChange={(e) => setK(e.target.value)}
          />
          <input 
            className="border border-black p-3 rounded-md w-2/4 mx-auto mt-3 hover:bg-green-200"
            type="number"
            placeholder="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <input
            className="border border-black p-3 rounded-md w-2/4 mx-auto mt-3 hover:bg-green-200"
            type="number"
            placeholder="humidity"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
          <input
            className="border border-black p-3 rounded-md w-2/4 mx-auto mt-3 hover:bg-green-200"
            type="number"
            placeholder="ph"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
          <input
            className="border border-black p-3 rounded-md w-2/4 mx-auto mt-3 hover:bg-green-200"
            type="number"
            placeholder="rainfall"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
          />
          <button className=' p-3 w-60 mx-auto text-2xl font-bold mt-10 rounded-2xl bg-green-500 hover:shadow-xl' type="submit">Predict</button>
        </form>
        <img className='w-80' src="/images/undraw_treasure_of-9-i.svg" alt="" />
      </div>
      <h1 className='text-2xl w-60  font-bold mt-10 mx-auto '>Result: <span className='ml-5'>{result}</span></h1>
      </>
      
    );
}
