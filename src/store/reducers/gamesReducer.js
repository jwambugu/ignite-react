const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initState, action) => {
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
