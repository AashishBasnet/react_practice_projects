import reactLogo from "../../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
