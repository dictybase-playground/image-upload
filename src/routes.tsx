import { createBrowserRouter } from "react-router-dom";
import { Callback } from "./Callback";
import { Home } from "./Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
];

const router = createBrowserRouter(routes);

export { router };
