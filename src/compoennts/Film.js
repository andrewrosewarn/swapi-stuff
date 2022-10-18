import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import StarshipLink from "./StarshipLink";

const StyledDiv = styled.div`
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default function Film() {
  const data = useLoaderData();

  return (
    <StyledDiv>
      <h1>{data.title}</h1>

      <h2>Starships</h2>
      <List>
        {data.starships.map((starship) => (
          <li key={starship}>
            <StarshipLink url={starship} />
          </li>
        ))}
      </List>

      <Outlet />
    </StyledDiv>
  );
}

export async function loader({ params }) {
  const response = await axios.get(`https://swapi.dev/api/films/${params.filmId}`);
  const data = await response.data;

  const starshipsResponse = await axios.get(`https://swapi.dev/api/starships`);
  const starshipsData = await starshipsResponse.data;

  const starshipsInFilm = starshipsData.results.filter((starship) => data.starships.includes(starship.url));

  console.log(starshipsInFilm);

  return data;
}
