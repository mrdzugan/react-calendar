import React from 'react';
import styles from './Controls.module.css';

const Controls = (props) => {
	const {direction, onChangeMonth} = props;
	return <button onClick={() => {
		onChangeMonth(direction);
	}} className={styles.controlButton}>{direction === 'next' ? '>>' : '<<'}</button>;
}

export default Controls;