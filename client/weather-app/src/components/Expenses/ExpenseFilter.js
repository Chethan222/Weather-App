import React from 'react';
import './ExpenseFilter.css';
import Card from '../UI/Card';


const ExpenseFilter = (props) =>{
    const onSelectionHandler = (event)=>{
        props.onChangeFilter(event.target.value);
    };
   
    return(
        <Card className='box'>
            <div className="title-box">
            <label className="filter-title">Filter By</label>
            </div>
            <select className="filter-dropdown" value={props.selected} onChange={onSelectionHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </Card>
    );

}

export default ExpenseFilter;