import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux.
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <CardSadow>
      <Detail>
        <Stats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platform &&
                game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
            </Platforms>
          </Info>
          <div className="media">
            <img src={game.background_image} alt={game.name} />
          </div>
          <div className="description">
            <p>{game.description_raw}</p>
          </div>
          <div className="gallery">
            {screen.results &&
              screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt="game" />
              ))}
          </div>
        </Stats>
      </Detail>
    </CardSadow>
  );
};
const CardSadow = styled(motion.div)`
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

const Detail = styled(motion.div)`
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
export default GameDetail;
