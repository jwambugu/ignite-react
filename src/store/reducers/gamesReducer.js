const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_GAMES":
      const { popularGames, upcomingGames, newGames } = payload;

      return {
        ...state,
        popularGames,
        upcomingGames,
        newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
