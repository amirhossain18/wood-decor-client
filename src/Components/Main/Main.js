import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavManu from '../Header/NavManu';
import TopManu from '../Header/TopManu';

const Main = () => {
    return (
        <div>
            <TopManu></TopManu>
            <NavManu></NavManu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;