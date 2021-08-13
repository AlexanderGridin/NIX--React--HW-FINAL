import { Provider } from "react-redux";
import store from "./store/index";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

import "./App.css";

import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
