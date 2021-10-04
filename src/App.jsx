import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPopularGames } from "./store/actions/gameActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularGames());
  });

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
