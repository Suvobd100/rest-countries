import { useState } from "react";

export default function Country({props}) {
    // console.log(props);
    const { 
        name: { common }, 
        flags: { png: flagPng }, 
        population, 
        area, 
        capital, 
        timezones 
      } = props;


//   console.log(population); 

const [visited, setVisited] = useState(false);

const handleVisited = ()=>{
        setVisited(!visited)
}


  return (
    <div className="mt-3 border-2 border-indigo-600 rounded-xl mb-5 lg:w-80 w-4/4 p-5 text-center">
        <span className="font-bold text-xl">Country Name : {common}</span>
        <span className="justify-center items-center flex">
        <img className="w-32 h-32 object-contain rounded-md mt-5" src={flagPng} alt="" />
        </span>
        
        <p className="mt-4 font-bold">Population: {population}</p>
        <p className="mt-4 font-bold">Area: {area}</p>
        <p className="mt-4 font-bold">Capital: {capital}</p>
        <p className="mt-4 mb-5 font-bold">Time Zone: {timezones}</p>
        <button onClick={handleVisited} className="btn btn-active">Visited</button>
        
    </div>
  )
}
 