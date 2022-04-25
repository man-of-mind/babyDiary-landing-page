import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./home.module.scss";
import { ButtonCard } from "../Cards/Cards";
import pregnancy from "../../images/pregnancy.svg";
import playIcon from "../../images/play.svg";


export default function Home() {
    return(
        <div>
            <Navbar />
            <div className={styles['amazing-development']}>
                <div className={styles['baby-health-text']}>
                    <div className={styles['baby-dev-text']}>Follow your baby's amazing development</div>
                    <div className={styles['baby-diary']}>
                        Baby Diary is the world's number one digital parenting resource, 
                        with content that reaches more than 100 million people monthly.
                    </div>
                    <div className={styles['buttons']}>
                        <ButtonCard width="136px" bgColor="#ED6FAB" color="#FFFFFF" text="Get Started"/>
                        <div className={styles['sign-in']}>
                            <ButtonCard width="136px" bgColor="#FFFFFF" color="#000" text="Sign in"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['content']}>
                <div className={styles['pregnancy-text']}>Your pregancy week by week</div>
                <img src={pregnancy} alt="pregancy week by week" className={styles['pregnancy-img']}></img>
                <div className={styles['create-acct']}>
                    <div className={styles['new-baby']}>
                        <div className={styles['text']}>
                            Want to know how your baby looks like now?
                        </div>
                        <div className={styles['buttons']}>
                            <ButtonCard width="136px" bgColor="#ED6FAB" color="#FFFFFF" text="Show me"/>
                            <div className={styles['sign-in']}>
                                <ButtonCard width="178px" bgColor="#FFFFFF" color="#000" text="Create Account"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles['new-baby-video']}>
                        <img src={playIcon} alt="play video" className={styles['play-button']}></img>
                    </div>
                </div>
                <div className={styles['expert-text']}>Get experts advice and answers</div>
            </div>
        </div>
    );
}