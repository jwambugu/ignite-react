const initialState = {
  game: {},
  screenshots: [],
  isLoading: true,
};

const gameDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_GAME_DETAILS":
      const { game, screenshots } = payload;

      state.screenshots.length = 0;

      return {
        ...state,
        game,
        screenshots,
        isLoading: false,
      };
    case "LOADING_GAME_DETAILS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
