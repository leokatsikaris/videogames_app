import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './landing.module.css';

export function Landing() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.neonWrapper}>
                <NavLink to='/home' 
                style={{ textDecoration: 'none' }
                }>
                <div className={styles.neonText}>ENTER</div>
                </NavLink>
            </div>
        </div>
    )
}