import React from 'react';
import {add, getWeeksInMonth, startOfWeek} from 'date-fns'
import Week from './../Week';
import styles from './Month.module.css';

const Month = (props) => {
	const {year, month} = props;
	const weeksInMonth = getWeeksInMonth(new Date(year, month));
	const firstDayInMonth = new Date(year, month, 1);
	let weekStart = startOfWeek(firstDayInMonth);
	const newMonth = [];
	for (let i = 0; i < weeksInMonth; i++) {
		newMonth.push(<Week key={i} startOfWeek={weekStart}/>);
		weekStart = add(weekStart, {weeks: 1});
	}
	return <>
		<table className={styles.monthTable}>
			<thead>
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