import "./Header.css";
import reactImg from '../../assets/react-core-concepts.png';
const words = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Header() {
    const word = words[getRandomInt(words.length)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {word} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;