import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Layout/Header'
import Home from '../views/Home'
import Download from "../views/Download"
import { Provider } from 'mobx-react'
import store from '../mobx/store'
import './index.less'
import './animations.less'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<React.Fragment>
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/download" component={Download} />
						</Switch>
					</React.Fragment>
				</Router>
			</Provider>
		)
	}
}