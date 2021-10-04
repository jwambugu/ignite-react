import { popularGamesURL } from "../../api";
import axios from "axios";

export const loadPopularGames = () => async (dispatch) => {
  const response = await axios.get(popularGamesURL(), {
    params: {
      key: import.meta.env.VITE_RWAG_API_KEY,
    },
  });

  dispatch({
    type: "FETCH_POPULAR_GAMES",
    payload: {
      popularGames: response.data.results,
    },
  });
};
