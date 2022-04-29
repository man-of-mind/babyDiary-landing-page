import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./home.module.scss";
import { ButtonCard, Card } from "../Cards/Cards";
import newBaby from '../../images/newbaby.svg';
import pregnancy from "../../images/pregnancy.svg";
import playIcon from "../../images/play.svg";
import { IconBody } from "../IconContainer/IconBody";
import babyDiary from "../../images/babydiary.svg";
import diary from "../../images/diary.svg";
import backIcon from "../../images/back.svg";
import mumBaby from "../../images/mum-baby.svg";
import nextIcon from "../../images/next.svg";
import appStore from "../../images/appStore.svg";
import diaryImage from "../../images/diary-image.svg";
import googlePlay from "../../images/googlePlay.svg";
import blogImage from "../../images/blog-image.svg";
import { Footer } from "../footer/Footer";
import { babyDiaryVideosData, expertSectionData, Icons } from "../utils";


let expertSection = expertSectionData.map(data => {
    return(
        <Card width="292px" height="380px" bgImage={data.image} bdRadius="15px">
            <div className={styles['text']}>{data.text}</div>
        </Card>
    );
});

let iconsSection = Icons.map(icon => {
    return(
        <IconBody icon={icon.image} text={icon.text}></IconBody>
    );
});

let babyDiaryVideoSection = babyDiaryVideosData.map(diary => {
    return(
        <div>
            <Card bgImage={diary.image} height="160px" bdRadius="10px">
                <img className={styles['videos-img']} src={playIcon} alt="play video"></img> 
            </Card>
            <div className={styles['text']}>
                <p className={styles['description']}>{diary.text}</p>
                <p className={styles['minute']}>12 mins</p>
            </div>
        </div>
    );
});

let babyDiaryBlogSection = babyDiaryVideosData.map(blog => {
    return (
        <div>
            <Card bgImage={blog.image} height="160px" bdRadius="10px" gradientColor="rgba(0, 0, 0, 0)" />
            <p className={styles['blog-title']}>{blog.text}</p>
            <p className={styles['description']}>From fertility troubles to baby-name...</p>        
        </div>
    );
});

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
                        <Card width="480px" height="300px" gradientColor="rgba(0, 0, 0, 0)" bdRadius="16px" bgImage={newBaby}>
                            <img src={playIcon} alt="play video" className={styles['play-button']}></img>
                        </Card>
                    </div>
                </div>
                <div className={styles['expert-text']}>Get experts advice and answers</div>
                <div className={styles['expert-pics']}>
                    {expertSection}
                </div>
                <div className={[styles['expert-text'], styles['explore-text']].join(" ")}>Explore our tools</div>
                <div className={styles['explore-icons']}>
                    {iconsSection}
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
                        {babyDiaryVideoSection}
                    </div>
                </div>
                <div className={styles['testimonial']}>
                    <img src={backIcon} alt="previous" className={styles['back']}></img>
                    <div className={styles['testify-container']}>
                        <p className={styles['testimony']}>Love this app! I've been using it since I found out I was pregnant. 
                            My daughter is now 8 months old, and I still rely on the information provided. 
                            I would be lost without it.
                        </p>
                        <p className={styles['testifier']}>Oyinkansola Salami</p>
                    </div>
                    <Card bgImage={mumBaby} width="487px" height="260px" bdRadius="10px">
                        <img className={styles['next-icon']} src={nextIcon} alt="next testimony"></img> 
                    </Card>
                </div>
                <div className={styles['diary-blog']}>
                    <div className={styles['baby-blog']}>Baby Diary Blog</div>
                    <div className={styles['blog']}>
                        {babyDiaryBlogSection}
                    </div>
                </div>
                <div className={styles['baby-center-app']}>
                    <div className={styles['app-store']}>
                        <div className={styles['babyCenter']}>Get the BabyCenter App</div>
                        <p>The #1 app for tracking pregnancy and baby growth.</p>
                        <img src={appStore} alt="get app from app store" className={styles['app-store-img']}></img>
                        <img src={googlePlay} alt="get app from play store"></img>
                    </div>
                    <img src={diaryImage} alt="baby diary pic" className={styles['diary-img']}></img>
                    <img src={blogImage} alt="blog img" className={styles['blog-img']}></img>
                </div>
                <hr className={styles['footer-line']}></hr>
                <Footer />
            </div>
        </div>
    );
}