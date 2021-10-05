import { getDate } from "./utils/utils";

const baseURL = "https://api.rawg.io/api";

const currentDate = getDate(0);
const lastYear = getDate(-1);
const nextYear = getDate(1);

// const popularGamesPath = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// const upcomingGamesPath = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// const newGamesPath = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = `${baseURL}/games/lists/popular?page_size=10`;
export const upcomingGamesURL = `${baseURL}/games/lists/recent-games-future?ordering=-added&page_size=10`;
export const newGamesURL = `${baseURL}/games/lists/recent-games?discover=true&ordering=-added&page_size=10`;
