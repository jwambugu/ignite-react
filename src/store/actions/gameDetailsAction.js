import axios from "axios";
import { getGameDetailsURL } from "../../api";

export const loadGameDetails = ({ id, screenshots }) => async (dispatch) => {
  const response = await axios.get(getGameDetailsURL(id), {
    params: {
      key: import.meta.env.VITE_RWAG_API_KEY,
    },
  });

  dispatch({
    type: "GET_GAME_DETAILS",
    payload: {
      game: response.data,
      screenshots,
    },
  });
};
