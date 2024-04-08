import React from 'react';

function Home(props) {
    return (
        <main className='h-screen'>
            <section className='h-full flex flex-col items-center justify-center'>
            <h1>Welcome to todos app</h1>
            <button className='py-1 px-4 rounded-lg h-8 block mt-8 bg-violet-900 text-white'>Login</button>
            </section>
            
        </main>
    );
}

export default Home;