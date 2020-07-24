import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from './page/Header';
import Main from './page/Main';
import Footer from './page/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const useStyles = createUseStyles({
	mainContainer: {
		flex: 1
	}
});

function App(props) {
	const classes = useStyles();
	return (
		<Router history={history}>
			<Header />
			<Main className={classes.mainContainer} />
			<Footer />
		</Router>
	);
}
export default App;
