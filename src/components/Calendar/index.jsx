import React, {Component} from 'react';
import styles from './Calendar.module.css';
import {format} from 'date-fns';
import Month from './Month';

class Calendar extends Component {
	/*constructor(props) {
		super(props);
		this.state = {
			currMonth: new Date().getMonth(),
			currYear: new Date().getFullYear(),
			daysInMonth: 0,
		};
	}*/

	render() {
		const date = new Date();
		return (
			<article className={styles.container}>
				<section className={styles.leftSide}>
					<h3 className={styles.currentDay}>{format(date, 'cccc')}</h3>
					<h1 className={styles.currentDate}>{date.getDate()}</h1>
				</section>
				<section className={styles.rightSide}>
					<h3 className={styles.monthAndYear}>{format(date, 'LLLL')} {date.getFullYear()}</h3>
					<Month year={2020} month={7}/>
				</section>
			</article>
		);
	}
}

export default Calendar;