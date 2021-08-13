import { Route } from "react-router-dom";

export default function renderRoutes(routes) {
  return routes.map((route, i) => {
    if (route.routes && route.routes.length > 0) {
      return [
        renderRoutes(route.routes),
        <Route
          key={i}
          path={route.path}
          component={route.component}
          exact={route.exact}
        ></Route>,
      ];
    }

    return (
      <Route
        key={i}
        path={route.path}
        component={route.component}
        exact={route.exact}
      ></Route>
    );
  });
}
