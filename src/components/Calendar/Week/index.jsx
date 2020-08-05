import React from 'react';
import {add, getDate} from 'date-fns';
import CalendarDate from './../CalendarDate';

const Week = (props) => {
	let {startOfWeek} = props;
	const newWeek = [];
	for(let i = 0; i < 7; i++) {
		newWeek.push(<CalendarDate key={getDate(startOfWeek)} date={getDate(startOfWeek)}/>);
		startOfWeek = add(startOfWeek, {days: 1});
	}
	return <tr>{newWeek}</tr>;
}

export default Week;