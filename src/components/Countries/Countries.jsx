import { useEffect, useState } from "react"
import Country from "../County/Country";

export default function Countries() {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/independent?status=true")
        .then(res => res.json())
        .then(data => setCountries(data));


    },[]);

  return (
    <div className="w-11/12 mx-auto flex flex-col items-center">
        <div className="text-center font-bold, text-4xl text-slate-700">
        <h1>World Country Name with Flag</h1>
        <h3 className="font-bold, text-2xl text-slate-500 mt-5 mb-5">
            Countries: {countries.length}
        </h3>
        </div>
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 justify-center items-center ">
                    {
                        countries.map(c =><Country key={c.ccn3} props={c}></Country>)
                    }
        </div>
        
    </div>
  )
}
