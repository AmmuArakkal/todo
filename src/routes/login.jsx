import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login(props) {

    const navigate = useNavigate();
const handleLogin=(e)=>{
    const form = e.target
    e.preventDefault()
    const email=form['email'].value
    const password = form['password'].value
axios.post('http://localhost:3000/users/login',{email,password},{withCredentials:true})
.then((data=>{
    console.log(data)
    navigate('/todos')
}))
.catch(err=>{
    console.log(err)
})

}

    return (
        <main className='h-screen'>
         <section className='h-full flex flex-column items-center justify-center'>
            <form className='flex flex-col ' onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input className='border border-violet-500 mt-2 mb-4' type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input className='border border-violet-500 mt-2 mb-4' type="password" name="password" id="password" />
                <button type='submit' className='py-1 px-4 bg-violet-700 text-white rounded-lg'>Login</button>
            </form>
            </section>   
        </main>
    );
}

export default Login;