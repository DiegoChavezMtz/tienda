import React , {useEffect,useState} from 'react';
import { Routes , Route } from 'react-router';
import { Home } from '../views/Home/Home';
import {Detalle} from '../views/Detalle/Detalle';
const AppRouter: React.FC= () => {
    return (
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/detalle/:idProduct' Component={Detalle}/>
        </Routes>
    );
};

export default AppRouter;