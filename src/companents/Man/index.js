import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryMan } from '../../redux/AddProductSlise';
import BayCart from '../BayCart';

const Man = () => {
    const {man} = useSelector((s)=>s.todo)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(categoryMan())
    },[])
    return (
        <div id='container'>
            <div className=" flex flex-wrap gap-24">
            {
                man.map((el)=><BayCart el={el}/> )
            }
            </div>
            
        </div>
    );
};

export default Man;