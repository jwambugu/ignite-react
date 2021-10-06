import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadGameDetails } from "../store/actions/gameDetailsAction";
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  const { id, name, released, background_image, short_screenshots } = game;
  const dispatch = useDispatch();

  const loadGameDetailsHandler = () => {
    dispatch(
      loadGameDetails({
        id,
        screenshots: short_screenshots,
      })
    );
  };

  return (
    <StyledGame onClick={loadGameDetailsHandler}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={background_image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
