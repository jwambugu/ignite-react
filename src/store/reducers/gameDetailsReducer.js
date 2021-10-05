const initialState = {
  game: {},
  screenshots: [],
};

const gameDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_GAME_DETAILS":
      const { game, screenshots } = payload;

      state.screenshots.length = 0;

      return { ...state, game, screenshots };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
