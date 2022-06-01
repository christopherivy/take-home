import logo from './logo.svg';
import Home from "./Home";
import Signup from "./Signup";
import Admin from "./Admin";
import About from "./About";


import './App.css';

function App () {
	return (
		<div className="App">
			<h1>Yodlr Design Challenge</h1>
			<Signup />
			<Admin />
			<About />


		</div>
	);
}

export default App;
