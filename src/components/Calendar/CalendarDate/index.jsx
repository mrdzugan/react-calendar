import React from 'react';
import {getDate} from 'date-fns';
import classNames from 'classnames';
import styles from './CalendarDate.module.css';


const CalendarDate = (props) => {
	const {date, isCurrent,month} = props;

	const isCurrentMonth = (date) => {
		return month === date.getMonth();
	}

	const style = classNames(
		[styles.date],
		{[styles.noVisible]: !isCurrentMonth(date)},
		{[styles.currentDate]: isCurrent});

	return <td className={style}>{getDate(date)}</td>;
}

export default CalendarDate;