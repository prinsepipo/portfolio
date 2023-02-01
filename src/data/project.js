import projecotaku from "../static/images/projects/project-otaku.png";
import highlowcardgame from "../static/images/projects/high-low-cardgame.png";
import webtictactoe from "../static/images/projects/tictactoe.png";
import portfolio from "../static/images/projects/pipo-portfolio.jpeg";
import meaa from "../static/images/projects/meaa.png";


const projects = [
  {
    name: "Portfolio",
    details: "This very portfolio website you are looking.",
    thumbnail: portfolio,
    liveUrl: "https://devpipo.gtsb.io",
    sourceUrl: "https://github.com/prinsepipo/portfolio",
    techIds: [4],
  },
  {
    name: "Project Otaku",
    details: "Project Otaku is a web app for creating and managing your anime and manga list. It uses drag and drop system to manage your list.",
    thumbnail: projecotaku,
    liveUrl: "https://projectotaku.herokuapp.com/",
    sourceUrl: "https://github.com/prinsepipo/projectotaku",
    techIds: [7, 4, 9],
  },
  {
    name: "School Landing Page",
    details: "A demo landing page of a school. A mobile first approach developed using GatsbyJS.",
    thumbnail: meaa,
    liveUrl: "https://prinsepipo.github.io/meaa/",
    sourceUrl: "https://github.com/prinsepipo/meaa",
    techIds: [1, 2, 3, 4],
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
