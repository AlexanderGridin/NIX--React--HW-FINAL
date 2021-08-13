import { BrowserRouter, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ROUTES from "./constants/routes";
import renderRoutes from "./lib/renderRoutes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>{renderRoutes(ROUTES)}</Switch>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
