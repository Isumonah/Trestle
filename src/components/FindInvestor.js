import searchIcon from "../images/search-icon.png"
import Filter from "./Filter"
import kemiAdetiba from "../images/kemi-adetiba.png"
import cynthiaAsorock from "../images/cynthia-asorock.png"
import felixAndrade from "../images/felix-andrade.png"
import adesuaTomid from "../images/adesua-tomid.png"
import locationIcon from "../images/location-icon.png"

import Nav from "./Nav"
import Footer from "./Footer"


export default function FindInvestor(){
    return(
        <div className="find-investor" id="find-investor">
            <div className="find-investor-nav">
            <Nav /></div>
            <div className="search-investor">
                <input placeholder="Search" />
                <div className="search-icon">
                    <img src={searchIcon} alt="search-icon" />
                </div>
            </div>
            <div className="filter-investors">
                <h3 className="filter-investors-title">Filter Investors:</h3>
                <Filter />
            </div>
            <div className="featured-investors">
                <button className="featured-investors-title">Featured Investors</button>
                <div className="investors">
                    <div className="investor">
                        <img src={kemiAdetiba} alt="image of Kemi Adetiba" />
                        <div className="about-investor">
                            <h4 className="name-of-investor">Kemi Adetiba</h4>
                            <ul className="investor-details">
                                <li className="investor-job">Venture Capitalist</li>
                                <li className="investor-location">
                                    <img src={locationIcon} alt="location-icon" />
                                    <p>Lagos, Nigeria</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor"> $45,000 - $60,000</p>
                        </div>
                    </div>
                    <div className="investor">
                        <img src={cynthiaAsorock} alt="image of Cynthia Asorock" />
                        <div className="about-investor">
                            <h4 className="name-of-investor">Cynthia Asorock</h4>
                            <ul className="investor-details">
                                <li className="investor-job">Angel Investor</li>
                                <li className="investor-location">
                                    <img src={locationIcon} alt="location-icon" />
                                    <p>Nairobi, Kenya</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor"> $30,000 - $80,000</p>
                        </div>
                    </div>
                    <div className="investor">
                        <img src={felixAndrade} alt="image of Felix Andrade" />
                        <div className="about-investor">
                            <h4 className="name-of-investor">Felix Andrade</h4>
                            <ul className="investor-details">
                                <li className="investor-job">Venture Capitalist</li>
                                <li className="investor-location">
                                    <img src={locationIcon} alt="location-icon" />
                                    <p>New York</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor"> $100,000 - $200,000</p>
                        </div>
                    </div>
                    <div className="investor">
                        <img src={adesuaTomid} alt="image of Adesua Tomid" />
                        <div className="about-investor">
                            <h4 className="name-of-investor">Adesua Tomid</h4>
                            <ul className="investor-details">
                                <li className="investor-job">Angel Investor</li>
                                <li className="investor-location">
                                    <img src={locationIcon} alt="location-icon" />
                                    <p>Abuja, Nigeria</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor"> $500,000 - $800,000</p>
                        </div>
                    </div>
                </div>
                <div className="see-more">
                        <h3>Do you want to see more?</h3>
                        <p>Join Trestle and be the first to connect with investors</p>
                        <form className="find-investor-form">
                            <label>
                                Full Name:
                                <input placeholder="Enter full name" />
                            </label>
                            <label>
                                Email Address:
                                <input placeholder="Enter email address" />
                            </label>
                            <label>
                                Password:
                                <input placeholder="Enter password" />
                            </label>
                            <label>
                                Confirm Password:
                                <input placeholder="Re enter password" />
                            </label>
                            <button>SIGN UP</button>
                        </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}