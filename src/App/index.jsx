import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Home from '../views/Home'
import Download from "../views/Download"
import LanguageSwitcher from '../components/LanguageSwitcher'
import { Provider } from 'mobx-react'
import store from '../mobx/store'
import './index.less';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<React.Fragment>
						<Header />
						{/* <LanguageSwitcher /> */}
						<main>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/download" component={Download} />
							</Switch>
						</main>
						<Footer />
					</React.Fragment>
				</Router>
			</Provider>
		)
	}
}