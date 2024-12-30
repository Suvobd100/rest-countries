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
    <div>
        <h3 className="font-bold, text-4xl text-slate-700">
            Countries: {countries.length}
        </h3>
        <div >
                    {
                        countries.map(c =><Country key={c.ccn3} props={c}></Country>)
                    }
        </div>
        
    </div>
  )
}
