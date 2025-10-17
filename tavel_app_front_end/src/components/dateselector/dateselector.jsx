import './dateselector.css'
import { DatePicker } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useDate } from '../../context';
import { useReducer } from 'react';
import { DateReducer } from '../../reducer';

export const DateSelector = ({ checkInType }) => {

    const { checkInDate, checkOutDate, datedispatch } = useDate();

    const handledispatchfunction = (date) => {
        datedispatch({ type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT", payload: date })
    }

    const hanldeissearchopen = () => {
        datedispatch({ type: "ISSEARCHOPEN" });
    }

    return (
        <DatePicker
            className="search-dest input"
            selected={checkInType === 'in' ? checkInDate : checkOutDate}
            dateFormat="dd/MM/yyyy"
            onFocus={hanldeissearchopen}
            onChange={handledispatchfunction}
            placeholderText='Add Dates'
            closeOnScroll={true}
        />
    )
}