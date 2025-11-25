import React from 'react';
import { Routes , Route } from 'react-router';
import { Home } from '../views/Home/Home';
import {Detalle} from '../views/Detalle/Detalle';
import { useCart } from '../hooks/useCart';
import styles from './appRouter.module.css';

export const AppRouter: React.FC= () => {
    const {getProducts , getTotal}= useCart();

    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navBarContainer}>
                <h1>Tienda Satori</h1>
                <div className={styles.cartContainer}>
                    <span>🛒 {getProducts().length} </span>
                    <span>${getTotal()}</span>
                </div>
            </nav>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/detalle/:idProduct' Component={Detalle}/>
            </Routes>

        </div>
        
    );
};