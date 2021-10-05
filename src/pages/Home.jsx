import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../store/actions/gameActions";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.games
  );

  return (
    <div>
      <GamesList>
        <GameDetails />

        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popularGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
      </GamesList>
    </div>
  );
};

const GamesList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
