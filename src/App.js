import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Film, { loader as filmLoader } from "./compoennts/Film";
import { DetailError } from "./compoennts/DetailError";
import Layout, { loader as layoutLoader } from "./routes/Layout";
import Starship, { loader as starshipLoader } from "./compoennts/Starship";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: layoutLoader,
    children: [
      {
        path: "/film/:filmId",
        element: <Film />,
        errorElement: <DetailError />,
        loader: filmLoader,
        children: [
          {
            path: "/film/:filmId/starship/:starshipId",
            element: <Starship />,
            loader: starshipLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<div>Loading ...</div>} />;
}

export default App;
