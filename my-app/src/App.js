import logo from './logo.svg'; // declarative style
import './App.css'; //declarative style

export const App = () => {
	//start imperative style....
	function getYear() {
		return String(new Date().getFullYear());
	}
	const year = getYear();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					<span id="year"> {year} </span>
				</p>
			</header>
		</div>
	);
}; //finish imperative style...
