import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import { Box } from "@material-ui/core";

function App() {
  return (
    <>
      <Nav />
      <Box style={{ marginTop: 64 }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
