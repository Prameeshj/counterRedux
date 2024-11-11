import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

const Counter = () => {
  const [Amount, setAmount] = useState(0)
  const { count } = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = () => {
      if(Amount){
        dispatch(incrementByAmount(+Amount))
      }else{
        alert("Please enter a valid Amount")
      }
  }

  return (
    <>
      <div className=' '>
        <div className='container-fluid w-75'>
          <h1 style={{ fontSize: '60px', fontFamily: "fantasy" }} className='text-white text-center py-5 fw-bold'>COUNTER APP</h1>
          <div className='border rounded-2 d-flex flex-column  align-items-center py-4 '>
            <h1 style={{ fontSize: '100px' }} className=' text-white  fw-bolder mb-3'>{count}</h1>
            <div className='mb-2'>
              <button onClick={() => dispatch(decrement())} className='btn btn-warning mx-4'>DECREMENT</button>
              <button onClick={() => dispatch(reset())} className='btn btn-danger mx-4'>RESET</button>
              <button onClick={() => dispatch(increment())} className='btn btn-success mx-4'>INCREMENT</button>
            </div>
            <div className='d-flex mt-5 align-items-center'>
              <input onChange={e => setAmount(e.target.value)} className=' form-control mx-2 h-50 ' type="text" placeholder='Enter the amount to be incremented' />
              <button onClick={handleIncrementAmount} className='btn btn-primary ms-3 '>INCREMENT BY AMOUNT</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Counter