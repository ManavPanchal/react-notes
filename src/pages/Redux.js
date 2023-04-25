import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {inc,dec} from "../States/reducers/index"

function Redux() {

  const crntState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center'>
      <div className="redux_box">
        <div className="number">{crntState}</div>
        <div className="incdec">
        <button className="increment_btn" onClick={()=> dispatch(inc(1))}>INC</button>
        <button className="decrement_btn" onClick={()=> dispatch(dec(1))}>DEC</button>
        </div>
      </div>
    </div>
  )
}

export default Redux
