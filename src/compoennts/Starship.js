import { useLoaderData } from "react-router-dom";
import axios from "axios";

export default function Starship() {
  const data = useLoaderData();

  return (
    <>
      <h2>{data.name}</h2>
      <div>Manufacturer : {data.manufacturer}</div>
      <div>Model : {data.model}</div>
    </>
  );
}

export async function loader({ params }) {
  const response = await axios.get(`https://swapi.dev/api/starships/${params.starshipId}`);
  const data = await response.data;

  return data;
}
