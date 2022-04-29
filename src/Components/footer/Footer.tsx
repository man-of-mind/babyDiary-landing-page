import React from "react";
import styles from "./footer.module.scss";
import logo from "../../images/logo.svg";
import babyDiaryLogo from "../../images/babyDiaryColored.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import Mlogo from "../../images/m-logo.svg";


export const Footer = () => {
    return(
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
            <hr></hr>
            <div className={styles['footer-icons']}>
                <img src={logo} alt="logo"></img>
                <img src={babyDiaryLogo} alt="baby videos" className={styles['logo']} />
                <p>&#169; Baby Diary. 2020</p>
                <img src={facebook} alt="facebook" className={styles['facebook']}></img>
                <img src={twitter} alt="twitter"></img>
                <img src={instagram} alt="instagram" className={styles['instagram']}></img>
                <img src={Mlogo} alt="mLogo app"></img>
            </div>
        </footer>
    );
}