import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {

    const [range,setrange]=useState("")
    const dispatch = useDispatch();
    const count = useSelector(state=>state.counter.value);
    console.log("count--",count)

    return (
        <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
            <h1 style={{fontSize:"70px",color:"black"}}>{count}</h1>
            <div>
                <button className='btn btn-warning p-3 ms-2' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
                <button className='btn btn-warning p-3 ms-2' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
                <button className='btn btn-warning p-3 ms-2' style={{width:"120px"}} onClick={()=>dispatch(reset())}>Reset</button>
            </div>
            <div>
                <input type="number" className='form-control w-100 mt-5' placeholder='please enter the range' style={{border:"blue"}} onChange={(e)=>setrange(e.target.value)}/>
            </div>
        </div>
    )
}

export default Counter