import HomeContainer from "containers/HomeContainer.jsx";
import UsersContainer from "containers/UsersContainer.jsx";
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
    component: UsersContainer
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
