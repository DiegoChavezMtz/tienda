import React from 'react';
import styles from './popupError.module.css'
export const PopUpError: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.popUpContainer}>
                <h3>Lo sentimos, ha ocurrido un error</h3>
            </div>
        </div>
    );
};