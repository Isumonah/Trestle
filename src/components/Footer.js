
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linkedin.png"
import youtube from "../images/youtube.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-explore-resources-contact">
                <div className="footer-explore">
                    <h3>EXPLORE</h3>
                    <p>Opportunities</p>
                    <p>For Businesses</p>
                    <p>Portfolio</p>
                </div>
                <div className="footer-resources">
                    <h3>Resources</h3>
                    <p>FAQs</p>
                    <p>Blog</p>
                    <p>News</p>
                </div>
                <div className="footer-connect">
                    <h3>CONNECT</h3>
                    <p>Contact Us</p>
                    <div className="footer-social-media">
                        <ul>
                            <li>
                                <img src={twitter} alt="twitter-icon" />
                                <a href="https://twitter.com/home"></a>
                                </li>
                            <li>
                                <img src={instagram} alt="instagram-icon" />
                                <a href="https://www.instagram.com/"></a>
                            </li>
                            <li>
                                <img src={linkedIn} alt="linkedin-icon" />
                                <a href="https://www.linkedin.com/in"></a>
                            </li>
                            <li>
                                <img src={youtube} alt="youtube-icon" />
                                <a href="https://www.youtube.com/"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright-terms">
                <div className="copyright-div">
                    <p> &#169; </p>
                    <p> 2023 </p>
                    <p> Trestle </p>
                    <p> All Rights Reserved</p>
                </div>
                <div className="terms-div">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}