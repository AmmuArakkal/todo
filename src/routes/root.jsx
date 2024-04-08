import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Root(props) {
    return (
        <>

        <header className='h-20 flex flex-row justify-between items-center p-4 shadow-lg '>
<span>Todoapp</span>
<nav>
    <ul className='flex gap-6'>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/todos"}>Todos</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
    </ul>
</nav>
        </header>
        <Outlet/>
        <footer className='flex  align-items-center justify-between bg-black text-white p-4 text-xs'>
<span>&copy;Ammu A D</span>
<span>Learning app</span>
        </footer>
            
        </>
    );
}

export default Root;