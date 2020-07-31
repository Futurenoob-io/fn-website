import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useAppContext } from '../../lib/react/appContextLib';
import Button from '../../baseComponents/Button';

const useStyles = createUseStyles({
	actionNavMenu: {
		display: 'flex'
	}
});

function ActionNavMenu() {
	const handleLogin = () => alert('handle this');
	const getEarlyAccess = () => alert('handle this');

	return (
		<div>
			<Button key="login" label={'login'} onClick={'handleLogin'} />
			<Button key="earlyAccess" label={'get early access'} onClick={'getEarlyAccess'} />
		</div>
	);
}
export default ActionNavMenu;
