const base_Url = "https://api.rawg.io/api/";
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesUrl = () => `${base_Url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_Url}${upcoming_games}`;
export const newGamesUrl = () => `${base_Url}${newGames}`;
export const gameDetailsUrl = (game_id) => `${base_Url}games/${game_id}`;
export const gameScreenshotUrl = (game_id) =>
  `${base_Url}games/${game_id}/screenshots`;
