import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
