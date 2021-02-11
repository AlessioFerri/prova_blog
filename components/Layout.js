import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import { Route } from 'react-router-dom';
import AppHeader from './AppHeader';

import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Article from '../pages/Article';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../config/theme';

const Layout = () => (
	<div>
		<CssBaseline />
		<MuiThemeProvider theme={theme}>
			<AppHeader />
			<main>
		  		<Route exact path="/" component={Home} />
				<Route path="/blog" component={Blog} />
				<Route exact path="/blog/:id" component={Article} />
				<Route exact path="/scrivimi" component={Contact} />
			</main>
		</MuiThemeProvider>
	</div>
);


export default Layout;
