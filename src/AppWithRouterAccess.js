import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import { Box } from "@material-ui/core";
import DetailBlog from "./components/post/DetailBlog";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import CreateBlog from "./components/post/CreateBlog";
import UpdateBlog from "./components/post/UpdateBlog";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { oktaAuthConfig, oktaSignInConfig } from "./config";
import Login from "./account/Login";

const oktaAuth = new OktaAuth(oktaAuthConfig);
function AppWithRouterAccess() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    // <BrowserRouter>
    //   <AppWithRouterAccess />
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <SecureRoute path="/">
        <Nav />
      </SecureRoute>
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/login"
            render={() => <Login config={oktaSignInConfig} />}
          />
          <Route path="/login/callback" component={LoginCallback} />
          <Route path="/details/:id">
            <DetailBlog />
          </Route>
          <Route
            path="/details/:id"
            render={(props) => <DetailBlog {...props} />}
          />
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/update/:id">
            <UpdateBlog />
          </Route>
          <Route
            path="/update/:id"
            render={(props) => <UpdateBlog {...props} />}
          />
        </Switch>
      </Box>
    </Security>
  );
}

export default AppWithRouterAccess;
