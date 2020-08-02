import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Header from './components/page/Header';
import Main from './components/page/Main';
import Footer from './components/page/Footer';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AppContext } from './lib/react/appContextLib';
import './App.css';

const history = createBrowserHistory();

const useStyles = createUseStyles({
	mainContainer: {
		flex: 1
	}
});

function App(props) {
	const classes = useStyles();
	const [ isAuthenticated, userHasAuthenticated ] = useState(false);
	return (
		<AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
			<Router history={history}>
				<Header />
				<Main className={classes.mainContainer} />
				<Footer />
			</Router>
		</AppContext.Provider>
	);
}
export default App;
