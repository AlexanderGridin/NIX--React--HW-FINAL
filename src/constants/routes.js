import HomePage from "../pages/HomePage/HomePage";
import PopulationByRegionPage from "../pages/PopulationByRegionPage/PopulationByRegionPage";
import PopulationByRegionAndYearPage from "../pages/PopulationByRegionAndYearPage/PopulationByRegionAndYearPage";

const ROUTES = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/population-data-by-state",
    component: PopulationByRegionPage,
  },
  {
    path: "/population-data-by-state-and-year",
    component: PopulationByRegionAndYearPage,
  },
];

export default ROUTES;
