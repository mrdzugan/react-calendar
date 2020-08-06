import React, {Component} from 'react';
import styles from './Calendar.module.css';
import {format, add} from 'date-fns';
import Month from './Month';
import Controls from "./Controls";

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		}
	}

	handleChangeMonth = (direction) => {
		const {date} = this.state;
		let newDate = date;
		if (direction === 'next') {
			newDate = add(date, {months: 1});
		} else if (direction === 'prev') {
			newDate = add(date, {months: -1});
		} else {
			throw new TypeError(`direction must be 'next' or 'prev'`);
		}
		this.setState({date: newDate});
	}

	render() {
		const {date} = this.state;
		return (
			<article className={styles.container}>
				<section className={styles.leftSide}>
					<h3 className={styles.currentDay}>{format(new Date(), 'cccc')}</h3>
					<h1 className={styles.currentDate}>{date.getDate()}</h1>
				</section>
				<section className={styles.rightSide}>
					<div className={styles.monthControlContainer}>
						<Controls direction={'prev'} onChangeMonth={this.handleChangeMonth}/>
						<h3 className={styles.monthAndYear}>{format(date, 'LLLL')} {date.getFullYear()}</h3>
						<Controls direction={'next'} onChangeMonth={this.handleChangeMonth}/>
					</div>
					<Month year={date.getFullYear()} month={date.getMonth()}/>
				</section>
			</article>
		);
	}
}

export default Calendar;