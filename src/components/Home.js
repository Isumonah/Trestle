import adeolaSagoe from "../images/adeola-sagoe.png"
import tolase from "../images/tolase.png"
import smallCircle from "../images/small-circle.png"
import smallCircleGreen from "../images/small-circle-green.png"

import Footer from "./Footer"
import Nav from "./Nav"
import AboutTrestleHome from './AboutTrestleHome'

export default function Home(){
    return(
        <div className="home" id="home">
            <div className="home-nav">
            <Nav /></div>
            <div className="connect-people">
                <h1>TRESTLE</h1>
                <h2>Connecting Business Owners with Potential Investors
                </h2>
                <button className="join-community-button">Join Our Community!</button>
            </div>
            <div className="home-owner-investor">
                <div className="home-owner">
                  <h4>Are you a Business Owner?</h4>  
                  <p>We connect you to over a thousand investors with verified portfolios around Africa</p>
                  <button><a href="/business-owner-application" className="visited:text-gray-100">Apply Now!</a></button>
                </div>
                <div className="home-investor">
                  <h4>Are you an Investor?</h4>  
                  <p>Our platform reaches over 300,000 small and medium verified enterprises in Africa. Let's chat.</p>
                  <button><a href="/investor-application" className="visited:text-teal-600">Invest Now!</a></button>
                </div>
            </div>
            <div className="trestle-vision">
                <h3>THE TRESTLE VISION</h3>
                <p>To be  a reputable and foremost  platform that  connect  SMEs in Africa to their potential investors from various sector(s) ranging from Agriculture, Finance, Education, Technology by providing them with the necessary funding and resources they need to increase there visibility within amd across Africa. We hope to raise not less than 10,000 African(s) in the space of five years to stardom through their businesses.</p>
            </div>
            <div className="trestle-corner">
                <h3 className="trestle-corner-title">TRESTLE CORNER</h3>
                <div className="business-mogul adeola">
                    <img src={adeolaSagoe} alt="picture of Adeola Sagoe" />
                    <div className="business-mogul-writeup">
                        <h3 className="adeola-name">ADEOLA SAGOE</h3>
                        <p className="adeola-writeup">Ms Deola Ade-Ojo is a Nigerian born fashion designer who is popularly known by her design name, Deola Sagoe. she began designing in 1988 when she join her mothers business with a view of expanding the labels repertoire to encompass more contemporary designs for ever-developing cosmopolitan high-brow society. Using Africa hand-woven materials in which she brought out life a range of distinct cultures; and contemporizing almost-lost traditional African techniques, Deola is well known for her uncanny attention to detail, her expert handling of diverse range of fabrics as well as her exemplary grasp of a wide range of female body types. She is celebrated back home for patriotism and zeal in Nigerian culture at large. </p>
                    </div>
                </div>
                <div className="business-mogul tolase">
                    <div className="business-mogul-writeup">
                        <h3 className="tolase-name">TOLASE OLULEYE (NIG)</h3>
                        <p className="tolase-writeup">Meet Tolase our super biz of the month. Tolase is a graduate of economics from University of Ibadan, she holds a masters degree in Business Administration from Lagos Business school. After graduation Tolase wanted more for her life and she decided to start selling fabric but due to lack of fund Tolase could not expand as much as she wanted, she came across trestle and she pitched her idea and fortunately she finally found an investor and that is the beginning of her turn about within few months Tolase has sold more than 1million fabric across Africa. Tolase is our super star and we are proud of her success.
 
                         </p>
                    </div>
                        <img src={tolase} alt="picture of Tolase Oluleye" />
                </div>
                <div className="carousel">   <div className="carousel-btns flex">
                        <img src={smallCircleGreen} />
                        <img src={smallCircle} />
                        <img src={smallCircle} />
                    </div>
                    <p>Read more featured stories  ></p>
                </div>
            </div>
            <div className="home-about-trestle-div"> <AboutTrestleHome /></div>
           
            <Footer />
        </div>
    )
}