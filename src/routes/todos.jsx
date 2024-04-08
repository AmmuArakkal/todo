import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Todos(props) {
const [todoFormVisible,setTodoformvisible]=useState(false)

    useEffect(()=>{
        axios.post('http://localhost:3000/users/verify',{},{withCredentials:true})
        

        .then(data=>{
            console.log("logged in")
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <main className='relative'>

            {todoFormVisible&&
            <> 
            <div className='fixed top-0 left-0 w-full h-full bg-black opacity-80'>&nbsp</div>
            <div className='fixed top-0 left-0  w-full h-full flex flex-col justify-center items-center'>
                <button onClick={()=>{setTodoformvisible(false)}}className='w-12 h-12 fixed top-4 right-4 '><img className='w-full h-full' src='/icons/close.svg'></img></button>
                <form className='flex flex-col max-w-xl w-full bg-white p-8 rounded-md'>
                    <label className='font-semibold mb-2' htmlFor="title">Title</label>
                    <input className='mb-6 p-2 border border-violet-600'type="text"  id="title" />
                    <label className='font-semibold mb-2' htmlFor="description">Description</label>
                    <textarea className='p-2 border border-violet-600'id="description" cols="30" rows="10"></textarea>
                    <button className='py-2 px-4 w-full bg-violet-500 text-white mt-8 hover:bg-violet-400'>Add todo</button>
                </form>

            </div
            ></>}
            <section className='h-40 flex flex-col items-center justify-center bg-violet-400'>
            <h1 className='text-3xl font-semibold'>Your todos</h1>
            </section>
            <section>
                <div className='flex justify-center py-8'>
                    <button onClick={()=>{setTodoformvisible(true)}} className='bg-gray-200 py-2 px-6 hover:bg-gray-400'>Add todo</button>
                </div>
                <ul className='flex flex-col gap-4'>
                    <li className='p-4 shadow-md' >
<h3 className='text-lg font-semibold'>Your todo title goes here </h3>
<p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus placeat accusamus, corrupti ratione commodi, quaerat excepturi obcaecati nulla soluta voluptate perferendis iure quasi minus fugiat, earum asperiores harum. Aut quaerat est ipsum itaque fugiat voluptatem architecto fuga ad voluptatum laudantium.</p>
                    </li>
                    <li className='p-4 shadow-md' >
<h3 className='text-lg font-semibold'>Your todo title goes here </h3>
<p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus placeat accusamus, corrupti ratione commodi, quaerat excepturi obcaecati nulla soluta voluptate perferendis iure quasi minus fugiat, earum asperiores harum. Aut quaerat est ipsum itaque fugiat voluptatem architecto fuga ad voluptatum laudantium.</p>
                    </li>
                    <li className='p-4 shadow-md' >
<h3 className='text-lg font-semibold'>Your todo title goes here </h3>
<p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus placeat accusamus, corrupti ratione commodi, quaerat excepturi obcaecati nulla soluta voluptate perferendis iure quasi minus fugiat, earum asperiores harum. Aut quaerat est ipsum itaque fugiat voluptatem architecto fuga ad voluptatum laudantium.</p>
                    </li>
                   
                </ul>
            </section>
            
        </main>
    );
}

export default Todos;