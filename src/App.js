import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Header from './page/Header';
import Main from './page/Main';
import Footer from './page/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AppContext } from './lib/react/appContextLib';

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
