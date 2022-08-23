import React from 'react';

//styles
import styles from './Navbar.module.css';

const Navbar = ({logouthandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Hamedgram
            </div>
            <div className={styles.logout} onClick={logouthandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;