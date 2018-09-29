import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Home from '../views/Home';
import Download from "../views/Download";
import './index.less';

export default class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Header/>
					<main>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path="/download" component={Download}/>
						</Switch>
					</main>
					<Footer/>
				</React.Fragment>
			</Router>
		);
	}
}