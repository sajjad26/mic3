import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Page from './Presentational/Layout/Page';
import Header from './Presentational/Layout/Header';
import PeopleContainer from './Containers/People/PeopleContainer';

export default class App extends Component {
	render(){
		return (
			<Page>
        		<Header />
        		<BrowserRouter>
					<Route path="/" component={PeopleContainer} />
        		</BrowserRouter>
			</Page>
		);
	}
}