import HomePage from "../pages/HomePage/HomePage";
import PopulationByStatePage from "../pages/PopulationByStatePage/PopulationByStatePage";
import PopulationByStateAndYearPage from "../pages/PopulationByStateAndYearPage/PopulationByStateAndYearPage";

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
  {
    path: "/population-data-by-state-and-year",
    component: PopulationByStateAndYearPage,
  },
];

export default ROUTES;
