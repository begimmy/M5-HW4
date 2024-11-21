import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementNum, decrementNum, resetNum, setText, plus_5, minus_5 } from './redux/reducer';




const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+</button>

            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-</button>

            <button onClick={()=>{
                dispatch(resetNum())
            }}>Reset</button>

             <button onClick={()=>{
                dispatch(setText('Hello Geeks!'))
            }}>Change</button>

             <button onClick={()=>{
                dispatch(plus_5())
            }}>+5</button>

             <button onClick={()=>{
                dispatch(minus_5())
            }}>-5</button>

        </div>
    );
}

export default Btn;
