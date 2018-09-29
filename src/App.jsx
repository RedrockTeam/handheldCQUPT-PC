import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './views/Home';
import Download from "./views/Download";
import './App.less';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<main>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path="/download" component={Download}/>
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
