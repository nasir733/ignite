import axios from "axios";
import { popularGamesUrl } from "../api";
import { upcomingGamesUrl } from "../api";
import { newGamesUrl } from "../api";
//action Creator

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS.
  const popularData = await axios.get(popularGamesUrl());
  const upcoming = await axios.get(upcomingGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcoming.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
