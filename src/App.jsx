import { popularGamesURL } from "./api";

function App() {
  console.log(import.meta.env.VITE_RWAG_API_KEY);
  console.log(popularGamesURL());
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
