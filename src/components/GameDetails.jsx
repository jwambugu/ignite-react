import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

const GameDetails = () => {
  const { game, screenshots } = useSelector((state) => state.gameDetails);
  const { name, rating, platforms, background_image, description_raw } = game;

  return (
    <div>
      <CardShadow className="shadow">
        <Details>
          <Stats>
            <div className="ratings">
              <h3>{name}</h3>
              <p>Ratings: {rating}</p>
            </div>
            <div className="info">
              <h3>Platforms</h3>
              <div className="platforms">
                {platforms &&
                  platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
              </div>
            </div>
          </Stats>

          <Media>
            <img src={background_image} alt={name} />
          </Media>

          <Description>{description_raw}</Description>

          <div className="gallery">
            {screenshots &&
              screenshots.map((screenShot) => (
                <img key={screenShot.id} src={screenShot.image} alt={name} />
              ))}
          </div>
        </Details>
      </CardShadow>
    </div>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
