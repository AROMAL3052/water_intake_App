import React from 'react'
import BasicExample from './navbar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectquantityByDate } from '../selecter'
import checkAuth from './mainAuth/checkAuth'
const Calculater = () => {
    const [date1,setDate1]=useState()
    const [date2,setDate2]=useState()
    const quantity1=useSelector(state=>selectquantityByDate(state,date1))
    const quantity2=useSelector(state=>selectquantityByDate(state,date2))
    
    const quantityDifference = quantity1 !== null && quantity2 !== null ? (quantity1 - quantity2) : null;


  return (
    <>
        <BasicExample></BasicExample>
        <div className='p-5 m-5 text-center'>
      <h2 className='p-4 text-success'>Calculate</h2>
        <label htmlFor="" > Day form:- </label>
        <input type='date' onChange={(e)=>setDate1(e.target.value)}></input>
        <br />
        <br />
        <label htmlFor="">This day:- </label>
        <input type='date' onChange={(e)=>setDate2(e.target.value)}></input>

        <p className='m-5'>
                Intake Difference between {date1} and {date2}:- 
                {quantityDifference !== null ?<span className={`bg-${quantityDifference > 0 ? 'danger' : 'success'} text-light p-2`}>{quantityDifference} ml </span> : 'No data available for one or both dates'}
            </p>

    
</div>

    </>

  )
}

export default checkAuth(Calculater) 
