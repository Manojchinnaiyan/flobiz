import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import BillBook from './components/BillBook';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/item' exact element={<BillBook />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
