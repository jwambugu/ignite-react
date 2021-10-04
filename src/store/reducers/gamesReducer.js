const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_POPULAR_GAMES":
      const { popularGames } = payload;

      return {
        ...state,
        popularGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
