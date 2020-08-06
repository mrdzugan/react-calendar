import React from 'react';
import {add, format} from 'date-fns';
import CalendarDate from './../CalendarDate';

const Week = (props) => {
	let {startOfWeek, month} = props;

	const isCurrentDay = () => {
		const currDate = new Date();
		return startOfWeek.getFullYear() === currDate.getFullYear() &&
			startOfWeek.getMonth() === currDate.getMonth() &&
			startOfWeek.getDate() === currDate.getDate();
	}

	const newWeek = [];
	for (let i = 0; i < 7; i++) {
		newWeek.push(<CalendarDate key={format(startOfWeek, 'P')} isCurrent={isCurrentDay()} date={startOfWeek}
								   month={month}/>);
		startOfWeek = add(startOfWeek, {days: 1});
	}
	return <tr>{newWeek}</tr>;
}

export default Week;