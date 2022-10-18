import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const extractId = (url) => url.substring(32, url.length - 1);

export default function StarshipLink({ url }) {
  const [starship, setStarship] = useState();

  useEffect(() => {
    const loadStartship = async () => {
      const response = await axios.get(url);
      const data = await response.data;

      setStarship(data);
    };

    loadStartship();
  }, [url]);

  return <div>{starship ? <Link to={`starship/${extractId(url)}`}>{starship.name}</Link> : null}</div>;
}
