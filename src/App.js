import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import { Box } from "@material-ui/core";
import DetailBlog from "./components/post/DetailBlog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateBlog from "./components/post/CreateBlog";
import UpdateBlog from "./components/post/UpdateBlog";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <DetailBlog />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/update">
            <UpdateBlog />
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
