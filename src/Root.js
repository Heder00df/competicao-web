import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";

import ErrorBoundary from "./components/ErrorBoundary";
import AppRoutes from "./routes/AppRoutes";
import configureStore from "./store/configureStore";
import styles, { theme } from "./RootStyles";

const store = configureStore();

export class Root extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <ErrorBoundary>
            <Provider store={store}>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </Provider>
          </ErrorBoundary>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Root);
