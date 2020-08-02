import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useAppContext } from '../../lib/react/appContextLib';
import Button from '../../baseComponents/Button';

const useStyles = createUseStyles({
	actionNavMenu: {
		marginTop: '27px' 
	}
});

function ActionNavMenu() {
	const handleLogin = () => alert('handle this');
	const getEarlyAccess = () => alert('handle this');
	const classes = useStyles();

	return (
		<div className={classes.actionNavMenu}>
			<Button key="login" type="primary" label={'Log In'} onClick={handleLogin} />
			<Button key="earlyAccess" type="secondary" label={'Get Early Access'} onClick={getEarlyAccess} />
		</div>
	);
}
export default ActionNavMenu;
