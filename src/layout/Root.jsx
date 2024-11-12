import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
    return (
        <div className='lg:w-4/5 w-[90%] mx-auto my-8'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;