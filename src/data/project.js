import projecotaku from "../static/images/projects/project-otaku.png";
import highlowcardgame from "../static/images/projects/high-low-cardgame.png";
import webtictactoe from "../static/images/projects/tictactoe.png";


const projects = [
  {
    name: "Project Otaku",
    details: "Project Otaku is a web app for creating and managing your anime and manga list. It uses drag and drop system to manage your list.",
    thumbnail: projecotaku,
    liveUrl: "https://projectotaku.herokuapp.com/",
    sourceUrl: "https://github.com/prinsepipo/projectotaku",
    techIds: [7, 4, 9],
  },
  {
    name: "High-Low Card Game",
    details: "A simple card game where you guess the next card's number if it is greater or less than the current card's number.",
    thumbnail: highlowcardgame,
    liveUrl: "https://prinsepipo.github.io/high-low-cardgame/",
    sourceUrl: "https://github.com/prinsepipo/high-low-cardgame",
    techIds: [1, 2, 3],
  },
  {
    name: "Web TicTacToe",
    details: "A simple TicTacToe game where you play against a bot.",
    thumbnail: webtictactoe,
    liveUrl: "https://prinsepipo.github.io/web-tictactoe/",
    sourceUrl: "https://github.com/prinsepipo/web-tictactoe",
    techIds: [1, 2, 3],
  },
];


export default projects;
