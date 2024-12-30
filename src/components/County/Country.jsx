
export default function Country({props}) {
    console.log(props);
    const{name: {common} }= props;
    
    const { flags: { png: flagPng } } = props;
    const {population} = props;
    const {area} = props;
    const {capital} = props;
    const {timezones} = props;

  console.log(population); 
  return (
    <div className="mt-3 max-w-fit border-2 border-indigo-600 rounded-xl mb-5 w-80 p-5 ">
        <span className="font-bold text-xl">Country Name : {common}</span>
        <img className="w-2/4 object-cover rounded-md mt-5" src={flagPng} alt="" />
        <p className="mt-4 font-bold">Population: {population}</p>
        <p className="mt-4 font-bold">Area: {area}</p>
        <p className="mt-4 font-bold">Capital: {capital}</p>
        <p className="mt-4 font-bold">Time Zone: {timezones}</p>
    </div>
  )
}
 