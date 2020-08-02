import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		listStyle: 'none',
		padding: 0,
		margin: 0
	},
	linkClassName: {
		color: 'white',
		textDecoration: 'none'
	}
});

function List({ data, type = 'externalLink' }) {
	const classes = useStyles();
	function renderExternalListItem({ id, title, description, link }) {
		return (
			<li>
				<a target="blank" key={id} href={link} alt={description} className={classes.linkClassName}>
					{title}
				</a>
			</li>
		);
	}
	const renderer = renderExternalListItem; // depending on the type you can change the renderer
	const listItems = data.map(renderer);
	return <ul className={classes.container}>{listItems}</ul>;
}
export default List;
