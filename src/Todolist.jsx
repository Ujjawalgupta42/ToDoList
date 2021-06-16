import React from 'react';

const Todolist=(props)=>{
    return(
        <>
            <div className='liststyle'>
                <button className='btn' onClick={()=>{
                    props.onSelect(props.id);
                }}>x</button>
                <li>{props.lists}</li>
            </div>
        </>
    );
}

export default Todolist;