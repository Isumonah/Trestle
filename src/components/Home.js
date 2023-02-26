import adeolaSagoe from "../images/adeola-sagoe.png"
import siluloUlutho from "../images/silulo-ulutho.png"
import circle from "../images/circle.png"

import Footer from "./Footer"
import Nav from "./Nav"

export default function Home(){
    return(
        <div className="home" id="home">
            <div className="home-nav">
            <Nav /></div>
            <div className="connect-people">
                <h1>Connecting Business owners with potential Investors</h1>
                <p>
                    Our goal is to help bridge  the financial constraints of small and  medium scale  enterprise by connecting them to potential investors across all African counties from different sectors ranging from Agriculture, Education, Technology and all other sectors you can think of. We aim to connect 5000 business owners to investors within three years and ensure that the business is striving by keeping track of there businesses through the help of the our community managers.    
                </p>
                <div className="investor-signup">
                    <button className="investor-owner">Are you an investor?</button>
                    <button className="home-signup-button">SIGN UP</button>
                </div>
                <div className="business-owner-signup">
                    <button className="investor-owner">Are you a business owner?</button>
                    <button className="home-signup-button">SIGN UP</button>
                </div>
            </div>
            <div className="trestle-vision">
                <h1>THE TRESTLE VISION</h1>
                <p> To be  a reputable and foremost  platform that  connect  SMEs in Africa to the their potential investors from various sector(s) ranging from Agriculture, Finance, Education, Technology irrespective by providing them with the necessary funding and resources they need to increase there visibility within and across Africa. We hope to raise not less than 5000 African(s) in the space of three year to stardom through there businesses .</p>
            </div>
            <div className="featured-business-mogul">
                <h3>Featured business Mogul</h3>
                <div className="business-mogul">
                    <img src={adeolaSagoe} alt="picture of Adeola Sagoe" />
                    <div className="business-mogul-writeup">
                        <h2 className="adeola-name">ADEOLA SAGOE</h2>
                        <p className="adeola-writeup">Ms Deola Ade-Ojo is a Nigerian born fashion designer who is popularly known by her design name, Deola Sagoe. she began designing in 1988 when she join her mothers business with a view of expanding the labels repertoire to encompass more contemporary designs for ever-developing cosmopolitan high-brow society. Using Africa hand-woven materials in which she brought out life a range of distinct cultures; and contemporizing almost-lost traditional African techniques, Deola is well known for her uncanny attention to detail, her expert handling of diverse range of fabrics as well as her exemplary grasp of a wide range of female body types. She is celebrated back home for patriotism and zeal in Nigerian culture at large. </p>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="business-mogul">
                    <div className="business-mogul-writeup">
                        <h2 className="silulo-name">SILULO ULUTHO</h2>
                        <p className="silulo-writeup">Luvuyo founded his award winning IT services company , Silulo Ulutho Technologies in 2004 to provide internet and computer access to a lower-income target market. The company now has over 46 stores in townships and rural areas in the Western, Eastern cape , and Kwazulu-Natal, 220 full-time members and 18 franchisees. Starting as a school teacher, Luvuyo knew that his destiny was to be found elsewhere and took the plunge in the form of a R10,100 loan and started the business that would propel him into forbes magazine 2014 and being named one of the JCI TOYP in the  categories of business, economics and enterpreneurial accomplishment.</p>
                        <button>Read more</button>
                    </div>
                        <img src={siluloUlutho} alt="picture of Silulo Ulutho" />
                </div>
                <div className="trestle-super-biz">
                    <h3>Trestle super biz of the month</h3>
                    <div className="super-biz">
                        <img src={siluloUlutho} alt="picture of Silulo Ulutho" />
                        <div className="super-biz-writeup">
                            <h2>TOLASE OLULEYE (NIG)</h2>
                            <p>Meet Tolase our super biz of the month. Tolase is a graduate of Economics from University of Ibadan, she holds a masters degree in Business Administration from Lagos Business school. After graduation Tolase wanted more for her life and she decided to start selling fabric but due to lack of fund Tolase could not expand as much as she wanted, she came across trestle and she pitched her idea and fortunately she finally found an investor and that is the beginning of her turn about. Within few months Tolase has sold more than 1million fabric across Africa. Tolase is our super star and we are proud of her success.
                            </p>
                        </div>
                    </div>
                    <div className="perks">
                        <h2>Perks of Working With Us</h2>
                        <p>Getting funds for SMEs is one of the major challenges  faced Startups in  Africa most especially Nigeria, many young talent with lot of potential are down the drain due to little or no support. And as we all know that when it comes to raising of capital, you need to be ahead of your competition. With an online platform like trestle you get to connect with investors and business partners with ease and undue stress. And because our platform is targeted and directed you can be sure that the interest you receive are one of the best deal making it a win-win for both paties.</p>
                    </div>
                    <div className="trestle-watchword-div">
                        <h2>TRESTLE WATCHWORD</h2>
                        <div className="trestle-watchword">
                            <div className="circles">
                            <img src={circle} alt="image of a circle" />
                            <img src={circle} alt="image of a circle" />
                            <img src={circle} alt="image of a circle" />
                            </div>
                            <div className="trestle-values">
                                <div className="trestle-value trustworthy">
                                <h5>Trustworthy</h5>
                        <p>We are trust worthy platform who has a name protect, we tend to be as transparent to our users as much as possible by connecting them to trustworthy investors and business owner</p>
                                </div>
                                <div className="trestle-value">
                                    <h5>Value</h5>
                                    <p>Our value can never be compromised for anything </p>
                                </div>
                                <div className="trestle-value">
                                    <h5>Standard</h5>
                                    <p>We source for the best investor for our business owner and one of the best deal out there with expert from different sector</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trestle-home-form">
                        <h1>
                            Sign up to our free mailing list
                        </h1>
                        <form>
                            <label>
                                <p>Name</p>
                                <input placeholder="Enter full name" />
                            </label>
                            <label>
                                <p>Email</p>
                                <input placeholder="Enter email address" />
                            </label>
                            <button>Get Started</button>
                        </form>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}