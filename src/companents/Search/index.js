import React from 'react';
import { useSelector } from 'react-redux';
import BayCart from '../BayCart';

const Search = () => {
    const {search} = useSelector((s)=>s.todo)
    return (
        <div className='container'> 
            <div className="">
                {
                    search.map((el)=><BayCart el={el}/>)
                }
            </div>
        </div>
    );
};

export default Search;