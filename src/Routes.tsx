import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '.';
import { EmailForm } from './form';

export const Routing = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Form' element={<EmailForm />}/>
        </Routes>
    </BrowserRouter>
    
)