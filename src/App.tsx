import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import store from "./store";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL || ""}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
