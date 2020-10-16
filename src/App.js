import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import FetchData from './service/FetchData';
import Home from './components/Home/Home';

import './style.css';


class App extends React.Component {

	fetchData = new FetchData();

	state = {
		rocket: 'Falcon 1',
		rocketFeatures: null,
		rockets: [],
		company: null,
	};

	componentDidMount() {
		this.updateRocket();
		this.updateCompany();
	}

	updateRocket() {
		this.fetchData.getRocket()
			.then(data => {
				this.setState({ rockets: data.map(item => item.name) });
				return data;
			})
			.then(data => data.find(item => item.name === this.state.rocket))
			.then(rocketFeatures => this.setState({ rocketFeatures }))
	};

	updateCompany = () => {
		this.fetchData.getCompany()
			.then(company => this.setState({ company }))
	};

	changeRocket = rocket => {
		this.setState({
			rocket
		}, this.updateRocket());
	};

	render() {
		return (
			<BrowserRouter>
				<Header rockets={this.state.rockets} changeRocket={this.changeRocket} />

				<Route exact path='/'>
					{this.state.company && <Home company={this.state.company} />}
				</Route>

				<Route path='/rocket'>
					<Main rocket={this.state.rocket} />
					{this.state.rocketFeatures && <Features rocketFeatures={this.state.rocketFeatures} rocket={this.state.rocket} />}
				</Route>

				<Route path='/calendar'>
					<Calendar />
				</Route>

				<Route path='/details'>
					<Details />
				</Route>
				{this.state.company && <Footer links={this.state.company.links} />}
			</BrowserRouter>
		);
	};
};

export default App;
