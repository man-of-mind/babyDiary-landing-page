import React from "react";
import styles from "./cards.module.scss";

interface CardProps {
    width: string,
    color: string,
    bgColor: string,
    text: string
}

export const ButtonCard:React.FC<CardProps> = (props) => {
    let cardStyle = {
        width: `${props.width}`,
        height: "35px",
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`,
        borderRadius: "6.7px"
    }
    return (
        <div className={styles['button-text']} style={cardStyle}>
            {props.text}
        </div>
    );
}


interface CardDetails {
    bgImage: string,
    height: string,
    width?: string,
    bdRadius: string,
    gradientColor?: string,
    children?: React.ReactNode
}

export const Card:React.FC<CardDetails> = ({ bgImage, height, width = "262px", bdRadius, gradientColor = "rgba(0, 0, 0, 0.45)", children}) => {
    let style = {
        height: `${height}`,
        width: `${width}`,
        backgroundImage: `linear-gradient(to left, ${gradientColor}, ${gradientColor}), url(${bgImage})`,
        borderRadius: `${bdRadius}`,
        backgroundRepeat: "no-repeat"
    }

    return (
        <div style={style}>
            {children}
        </div>
    );

}

