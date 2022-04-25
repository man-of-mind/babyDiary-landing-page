import React from "react";
import styles from "./iconbody.module.scss";

interface props {
    icon: string,
    text: string,
}

export const IconBody:React.FC<props> = ({icon, text}) => {
    return (
        <div className={styles['container']}>
            <div className={styles['ellipse-cover']}>
                <img src={icon} alt={text}></img>
            </div>
            <hr></hr>
            <div className={styles['text']}>{text}</div>
        </div>
    );
}