
import React, { useState } from 'react';
import './filter.css';

const ExpensesFilter = (props) => {
  const [year, setYear] = useState()

  const selectYearHandler = (e) => {
    setYear(e.target.value)
 
    // selected year becomes e.target.value
    props.filterChangeHandler(e.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value = {props.select} onChange={selectYearHandler}>

          <option
          value='2022'>2022</option>
          <option 
           value='2021'>2021</option>

          <option 
          value='2020'>2020</option>

          <option 
          value='2019'>2019</option>
       
        </select>
        
      
      </div>
    </div>
  );
};

export default ExpensesFilter;