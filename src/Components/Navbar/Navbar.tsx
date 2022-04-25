import React from "react";
import styles from "./navbar.module.scss";
import searchIcon from "../../images/search_icon.svg";

const sections = [
    'Community', 
    'Getting Pregnant', 
    'Pregnancy', 
    'Baby', 
    'Health', 
    'Video',
    'For you'
]

let navSections = sections.map(section => {
    return (
        <div>
            {section}
        </div>
    );
})

const Navbar = () => {
    return(
        <div className={styles['nav-container']}>
            <div className={styles['search-authentication']}>
                <div className={styles['search-container']}>
                    <img src={searchIcon} alt="search icon" className={styles['search-icon']}></img>
                    <input
                    type="text"
                    placeholder="Find Information"
                    className={styles['info-input']}></input>
                    <button className={styles["search"]}>Search</button>
                </div>
                <div className={styles['auth']}>
                    <div className={styles['about-diary']}>About Baby Diary</div>
                    <div className={styles['sign-in']}>Sign in</div>
                    <div className={styles['sign-up']}>
                        <p>Sign up</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className={styles['nav-sections']}>
                {navSections}
            </div>
        </div>
    );
}


export default Navbar;