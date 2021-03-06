import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Cloud from "./components/pages/Cloud";
import Home from "./components/pages/Home";
import NotFoundPage from "./components/pages/NotFoundPage";
import store from "./store";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL || ""}>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Product" component={Cloud} />
              <Route component={NotFoundPage} />
            </Switch>
          </ScrollToTop>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
