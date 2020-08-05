import React, {Component} from 'react';
import styles from './Calendar.module.css';
import Month from './Month';

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currMonth: new Date().getMonth(),
			currYear: new Date().getFullYear(),
			daysInMonth: 0,
		};
	}

	render() {
		const date = new Date();
		return (
			<article className={styles.container}>
				<div className={styles.leftSide}><h3>Friday</h3><h1 className={styles.currentDate}>{date.getDate()}</h1>
				</div>
				<div className={styles.rightSide}><Month year={2020} month={7}/></div>
			</article>
		);
	}
}

export default Calendar;