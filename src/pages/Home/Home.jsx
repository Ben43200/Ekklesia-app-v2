// import logo from './logo.svg';
// import './App.css';
import CardImage from "../../components/CardImage";
import CardInfoHome from "../../components/CardInfoHome";
import "./home.scss"
function Home() {
  return (
    <main>
    <div className="grid-container">

{/* <h1>Hello World</h1> */}
<CardImage />
<CardInfoHome />
    </div>
    </main>
  );
}

export default Home;
