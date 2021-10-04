import { getDate } from "./utils/utils";

const base_url = "https://api.rawg.io/api";

const currentDate = getDate(0);
const lastYear = getDate(-1);
const nextYear = getDate(1);

const popular_games_path = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}/${popular_games_path}`;
