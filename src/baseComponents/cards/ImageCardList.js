import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import Image from '../Image';
import Text from '../Text';
import Title from '../Title';

const useStyles = createUseStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 290px',
        flexDirection: 'column'
    },
    imageHolder: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around'
    }
})
export default function ImageCardList({ images = [], title, description }) {
    const classes = useStyles();
    return (<div className={classes.imageContainer}>
        <Title size={'xl'} title={title} ></Title>
        <Text text={description} type={'imageDescription'}></Text>
        <div className={classes.imageHolder}>{images.map(image => (<Image type={"small"} src={image.imgSrc} />))}</div>
    </div>)
}