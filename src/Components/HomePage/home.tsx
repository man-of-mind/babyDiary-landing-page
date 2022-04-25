import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./home.module.scss";
import { ButtonCard, Card } from "../Cards/Cards";
import pregnancy from "../../images/pregnancy.svg";
import playIcon from "../../images/play.svg";
import pregnantWoman from "../../images/pregnantWoman.svg";
import babyImg from "../../images/baby.svg";
import diaperImg from "../../images/diaper.svg";
import laborPic from "../../images/labor.svg";
import datePicker from "../../images/Vector.svg";
import GainCalc from "../../images/gaincalc.svg";
import Clock from "../../images/clock.svg";
import ChildGrowth from "../../images/childgrowth.svg";
import Memories from "../../images/memories.svg";
import Scheduler from "../../images/scheduler.svg";
import { IconBody } from "../IconContainer/IconBody";
import babyDiary from "../../images/babydiary.svg";
import diary from "../../images/diary.svg";
import jotter from "../../images/jotter.svg";
import babyName from "../../images/babyName.svg";
import pregnancyPain from "../../images/pregnancyPain.svg";
import pregnancySign from "../../images/pregnancySigns.svg";


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
                <div className={styles['expert-pics']}>
                    <Card width="292px" height="380px" bgImage={pregnantWoman} bdRadius="15px">
                        <div className={styles['text']}>Is it safe?</div>
                    </Card>
                    <Card width="292px" height="380px" bgImage={laborPic} bdRadius="15px">
                        <div className={styles['text']}>Labor and Delivery</div>
                    </Card>
                    <Card width="292px" height="380px" bgImage={diaperImg} bdRadius="15px">
                        <div className={styles['text']}>Diapering</div>
                    </Card>
                    <Card width="292px" height="380px" bgImage={babyImg} bdRadius="15px">
                        <div className={styles['text']}>Baby sleep</div>
                    </Card>
                </div>
                <div className={[styles['expert-text'], styles['explore-text']].join(" ")}>Explore our tools</div>
                <div className={styles['explore-icons']}>
                    <IconBody icon={datePicker} text="Due Date Calculator"></IconBody>
                    <IconBody icon={GainCalc} text="Pregnancy Gain Calculator"></IconBody>
                    <IconBody icon={Clock} text="Contraction Timer"></IconBody>
                    <IconBody icon={ChildGrowth} text="Child Growth Chart"></IconBody>
                    <IconBody icon={Scheduler} text="Immunization Scheduler"></IconBody>
                    <IconBody icon={Memories} text="Memories Save"></IconBody>
                </div>
                <div className={styles["baby-videos"]}>
                    <div className={styles['header']}>
                        <img src={babyDiary} alt="logo"></img>
                        <img src={diary} alt="baby videos" className={styles['diary']}/>
                        <div className={styles['text']}>VIDEOS</div>
                    </div>
                    <div className={styles['video-container']}>
                        <div className={styles['people-watching-text']}>
                            What people are watching now
                        </div>
                        <ButtonCard width="178px" bgColor="#FFFFFF" color="#000" text="View more videos"></ButtonCard>
                    </div>
                    <div className={styles['videos']}>
                        <div>
                            <Card bgImage={jotter} width="292px" height="100px" bdRadius="10px">
                                <img src={playIcon} alt="play video"></img> 
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}