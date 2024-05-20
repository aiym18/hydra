import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryKids } from '../../redux/AddProductSlise';
import BayCart from '../BayCart';

const Kids = () => {
    const {kids} = useSelector((s)=>s.todo)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(categoryKids())
    },[])
    return (
        <div className=' container'>
            <div className="flex flex-wrap gap-8">
            {
                kids.map((el)=><BayCart el={el}/>)
            }
            </div>
            
        </div>
    );
};

export default Kids;