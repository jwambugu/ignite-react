import { newGamesURL, popularGamesURL, upcomingGamesURL } from "../../api";
import axios from "axios";

const loadPopularGames = async () => {
  const response = await axios.get(popularGamesURL, {
    params: {
      key: import.meta.env.VITE_RWAG_API_KEY,
    },
  });

  return response.data.results;
};

const loadUpcomingGames = async () => {
  const response = await axios.get(upcomingGamesURL, {
    params: {
      key: import.meta.env.VITE_RWAG_API_KEY,
    },
  });

  return response.data.results;
};

const loadNewGames = async () => {
  const response = await axios.get(newGamesURL, {
    params: {
      key: import.meta.env.VITE_RWAG_API_KEY,
    },
  });

  return response.data.results;
};

export const loadGames = () => async (dispatch) => {
  const popularGames = await loadPopularGames();
  const upcomingGames = await loadUpcomingGames();
  const newGames = await loadNewGames();

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames,
      upcomingGames,
      newGames,
    },
  });
};
