import businessWomen from "../images/business-women.png"
import groupLadies from "../images/group-ladies.png"
import cynthia from "../images/cynthia-asorock.png"

import AboutTrestle from "./AboutTrestle"
import Footer from "./Footer"


export default function About(){
    return(
        <div className="about container">
            <div className="about-img-div">
                <div className="about-img">
                    <img src={businessWomen} alt="business-women" />
                </div>
            </div>
            
            
            <div className="our-story-div">
                <div className="our-story">
                    <img src={groupLadies} alt="group of girls" />
                    <div className="story-writeup">
                        <h1>OUR STORY</h1>
                        <p>
                            Trestle is a free investment platform with a supportive online community to learn and grow as a business owner. We help small and medium enterprises advance by connecting them with the right investors.
                        </p>
                        <p>
                            Founded by Team Unicorn- a group of twelve ladies, Trestle started as a capstone project on Microsoft Teams in February 2023. These women came together to implement their vision of bridging the financial constraints of small scale enterprises to further contribute to the GDP of Low Medium Countries(LMICs) in Africa.
                            </p>
                        <p>
                            Despite the role of SMEs in the economy, the financial constraints they face in their operation are daunting, and this has a negative impact on their development and also limits their potential to drive the economy as expected. This is worrying for a developing economy without the infrastructure and technology to attract big businesses in large numbers.
                        </p>
                        <p>
                            It is no longer news that SMEs play a major role in most economies, particularly developing countries, However, access to finance is a key constraint to SMEs growth, it is the second most cited obstacle facing SMEs to grow their business in emerging markets and developing countries. Unfortunately, SMEs are less likely to be able to obtain bank loans than large firms, instead, they rely on internal funds, angel investors, or cash from friends and family to launch and run their enterprise.

                        </p>
                        <p>
                            This is particularly a significant concern for African SMEs because this impedes their capacity and ability to develop and grow without sufficient operating capital and this is where Trestle driven by our community and the need to connect SMEs with the right investors.
                        </p>
                    </div>
                </div>
                <div className="get-in-touch">
                    <div className="get-in-touch-list">
                        <h2>GET IN TOUCH</h2>
                        <p>apply@trestle.com</p>
                        <p>invest@trestle.com</p>
                        <p>events@trestle.com</p>
                        <p>community@trestle.com</p>
                        <p>support@trestle.com</p>
                    </div>
                    <div className="get-in-touch-img">
                        <img src={cynthia} alt="picture of Cynthia Asorock" />
                    </div>
                </div>
                <div className="sign-up-div">
                    <h3>READY TO GET STARTED?</h3>
                    <button className="sign-up">SIGN UP</button>
                </div>
            </div>
            <AboutTrestle />
            <Footer />
            
        </div>
    )
}