import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import ChatBot from '../Components/Chatbot/ChatBot';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ChatBot></ChatBot>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;