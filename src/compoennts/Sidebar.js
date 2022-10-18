import { Link, useLoaderData, useNavigation } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  width: 200px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const extractFilmId = (url) => url.substring(28, url.length - 1);

export default function Sidebar() {
  const data = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <StyledSidebar>
      <h1>Movies</h1>
      <ul>
        {data.map((film) => (
          <li key={film.episode_id}>
            <Link to={`film/${extractFilmId(film.url)}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
      {isLoading ? (
        <div>
          <div>Loading</div>
          <div>{navigation.location.pathname}</div>
        </div>
      ) : null}
    </StyledSidebar>
  );
}
