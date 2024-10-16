import React from 'react'
import { addData } from '../UserReducer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BasicExample from './navbar'
import checkAuth from './mainAuth/checkAuth'


const Create = () => {
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('en-CA');

    const [date, setDate] = useState(formattedDate)
    const [quantity, setquantity] = useState()

    const data = useSelector((state) => state.data)

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();

        const dateExists = data.some((entry) => entry.date === date)
        if (dateExists) {
            return window.alert("date is alredy exists")
        }

        dispatch(addData({
            id: data[data.length - 1].id + 1, date, quantity
        }))

    };


    return (
        <div >
            <BasicExample></BasicExample>
            <div className='text-center m-5 p-5' >
                <h4>Create Intake data</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Enter the date:</label>
                        <input type='date' name='date' className='form-control' placeholder='Enter your name'
                            onChange={e => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='weight'>Enter water Intake:</label>
                        <input required type='weigth' name='email' className='form-control' placeholder='Enter quantity'
                            onChange={e => setquantity(e.target.value)} ></input>
                    </div>
                    <br>
                    </br>
                    <button className='btn btn-info'>Submit</button>
                </form>

            </div>

        </div>
    )
}

export default checkAuth(Create) 
