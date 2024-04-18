import * as React from "react";
import SeparatePage from "./SeparatePage";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";

import JqxBarGauge, {
  IBarGaugeProps,
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";

class App extends React.PureComponent<{}, IBarGaugeProps> {
  constructor(props: {}) {
    super(props);

    this.state = {
      tooltip: {
        formatFunction(value?: number | string): string {
          return "Year: 2016 Price Index:" + value;
        },
        visible: true,
      },
      values: [10, 20, 30, 40, 50],
    };
  }

  public render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/separate-page">Separate Page</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/separate-page" element={<SeparatePage />} />
            <Route
              path="/"
              element={
                <JqxBarGauge
                  width={600}
                  height={600}
                  max={60}
                  colorScheme={"scheme02"}
                  values={this.state.values}
                  tooltip={this.state.tooltip}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
