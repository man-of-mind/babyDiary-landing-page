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
import backIcon from "../../images/back.svg";
import mumBaby from "../../images/mum-baby.svg";
import nextIcon from "../../images/next.svg";
import appStore from "../../images/appStore.svg";
import diaryImage from "../../images/diary-image.svg";
import googlePlay from "../../images/googlePlay.svg";
import blogImage from "../../images/blog-image.svg";


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
                            <Card bgImage={jotter} width="262px" height="160px" bdRadius="10px">
                                <img className={styles['videos-img']} src={playIcon} alt="play video"></img> 
                            </Card>
                            <div className={styles['text']}>
                                <p className={styles['description']}>7 Baby’s Checklist</p>
                                <p className={styles['minute']}>12 mins</p>
                            </div>
                        </div>
                        <div>
                            <Card bgImage={babyName} width="262px" height="160px" bdRadius="10px">
                                <img className={styles['videos-img']} src={playIcon} alt="play video"></img> 
                            </Card>
                            <div className={styles['text']}>
                                <p className={styles['description']}>Awesome baby name ideas</p>
                                <p className={styles['minute']}>12 mins</p>
                            </div>
                        </div>
                        <div>
                            <Card bgImage={pregnancySign} width="262px" height="160px" bdRadius="10px">
                                <img className={styles['videos-img']} src={playIcon} alt="play video"></img> 
                            </Card>
                            <div className={styles['text']}>
                                <p className={styles['description']}>10 signs you are pregnant</p>
                                <p className={styles['minute']}>12 mins</p>
                            </div>
                        </div>
                        <div>
                            <Card bgImage={pregnancyPain} width="262px" height="160px" bdRadius="10px">
                                <img className={styles['videos-img']} src={playIcon} alt="play video"></img> 
                            </Card>
                            <div className={styles['text']}>
                                <p className={styles['description']}>Pregnancy and back pain</p>
                                <p className={styles['minute']}>12 mins</p>
                            </div>
                        </div>
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
                        <div>
                            <Card bgImage={jotter} width="262px" height="160px" bdRadius="10px" />
                            <p className={styles['blog-title']}>7 Baby’s Checklist</p>
                            <p className={styles['description']}>From fertility troubles to baby-name...</p>        
                        </div>
                        <div>
                            <Card bgImage={babyName} width="262px" height="160px" bdRadius="10px" />
                            <p className={styles['blog-title']}>Awesome baby name ideas</p>
                            <p className={styles['description']}>From fertility troubles to baby-name...</p>
                        </div>
                        <div>
                            <Card bgImage={pregnancySign} width="262px" height="160px" bdRadius="10px" />
                            <p className={styles['blog-title']}>10 signs you are pregnant</p>
                            <p className={styles['description']}>From fertility troubles to baby-name...</p>
                        </div>
                        <div>
                            <Card bgImage={pregnancyPain} width="262px" height="160px" bdRadius="10px" />
                            <p className={styles['blog-title']}>Pregnancy and back pain</p>
                            <p className={styles['description']}>From fertility troubles to baby-name...</p>
                        </div>
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
                <footer>
                    <div className={styles['content']}>
                        <div>
                            <p>About</p>
                            <table>
                                <tr>
                                    <td>Careers</td>
                                    <td>Terms of Service</td>
                                </tr>
                                <tr>
                                    <td>Press &#38; news</td>
                                    <td>Intellectual Property Claim</td>
                                </tr>
                                <tr>
                                    <td>Privacy Policy</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <p>Support</p>
                            <table>
                                <tr>
                                    <td>FAQ</td>
                                    <td>Trusts &#38; Safety</td>
                                </tr>
                                <tr>
                                    <td>Help &#38; Support</td>
                                    <td>Contact Us</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <p>Community</p>
                            <table>
                                <tr>
                                    <td>Blog</td>
                                    <td>Affliates</td>
                                </tr>
                                <tr>
                                    <td>Forum</td>
                                    <td>Invite a friend</td>
                                </tr>
                                <tr>
                                    <td>Podcasts</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className={styles['footer-text']}>
                        <p>All rights reserved. Baby Diary is designed for educational purposes only.</p> 
                        <p>
                            Consult with a medical professional if you have health concerns. 
                            Use of this site is subject to our <a href="localhost:3000/">Terms of Use</a> and <a href="localhost:3000/">Privacy Policy.</a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}