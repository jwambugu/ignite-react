import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />

      <Route path={["games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
