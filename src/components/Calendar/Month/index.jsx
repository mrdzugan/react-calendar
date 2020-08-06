import React from 'react';
import {add, getWeeksInMonth, startOfWeek} from 'date-fns'
import Week from './../Week';
import styles from './Month.module.css';

const Month = (props) => {
	const {year, month} = props;
	const date = new Date(year, month);
	const weeksInMonth = getWeeksInMonth(date);
	const firstDayInMonth = new Date(year, month, 1);
	let weekStart = startOfWeek(firstDayInMonth);
	const newMonth = [];
	for (let i = 0; i < weeksInMonth; i++) {
		newMonth.push(<Week key={i} startOfWeek={weekStart} month={month}/>);
		weekStart = add(weekStart, {weeks: 1});
	}
	return <>
		<table className={styles.monthTable}>
			<thead className={styles.monthHead}>
			<tr>
				<th>S</th>
				<th>M</th>
				<th>T</th>
				<th>W</th>
				<th>T</th>
				<th>F</th>
				<th>S</th>
			</tr>
			</thead>
			<tbody>{newMonth}</tbody>
		</table>
	</>;
}

export default Month;