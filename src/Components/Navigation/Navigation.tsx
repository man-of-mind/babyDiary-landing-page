import React from "react";
import styles from "./navigation.module.scss";

const Navigation = () => {
    return(
        <div className={styles['nav-container']}>
            <div className={styles['search-authentication']}>
                <div className={styles['search-container']}>
                    <input
                    type="text"
                    placeholder="Find Information"></input>
                    <button className={styles["search"]}>Search</button>
                </div>
            </div>
        </div>
    );
}


export default Navigation;