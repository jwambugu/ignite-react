import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ game }) => {
  const { name, released, background_image } = game;

  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={background_image} alt={name} />
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