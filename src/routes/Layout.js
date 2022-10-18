import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../compoennts/Sidebar";
import axios from "axios";

const StyledDiv = styled.div`
  background-color: #f0f0f0;
  display: flex;
  height: 100vh;
`;

export default function Layout() {
  return (
    <StyledDiv>
      <Sidebar />
      <Outlet />
    </StyledDiv>
  );
}

export async function loader() {
  const response = await axios.get("https://swapi.dev/api/films");
  const data = await response.data;

  return data.results;
}
