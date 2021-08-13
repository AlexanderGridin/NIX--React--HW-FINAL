import HomePage from "../pages/HomePage/HomePage";
import PopulationByStatePage from "../pages/PopulationByStatePage/PopulationByStatePage";

const ROUTES = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/population-data-by-state",
    component: PopulationByStatePage,
  },
];

export default ROUTES;
