import HomeContainer from "containers/HomeContainer.jsx";
import NotFound from "components/NotFound.jsx";

const layoutRoutes = [
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
    path: "/user",
    exact: false,
    component: HomeContainer
  },
];

const emptyRoutes = [
  {
    path: "*",
    exact: false,
    component: NotFound
  }
]

export { layoutRoutes, emptyRoutes };
