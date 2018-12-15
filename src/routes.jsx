import HomeContainer from "containers/HomeContainer.jsx";
import NotFound from "components/NotFound.jsx";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomeContainer
  },
  {
    path: "/home",
    exact: false,
    component: HomeContainer
  },
  {
    path: "*",
    exact: false,
    component: NotFound
  },
  
];

export default routes;
