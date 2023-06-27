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
            <div className="mx-6 sm:mx-8 lg:mx-10 flex h-10 md:h-12 search-investor mt-8 text-center border-2 sm:w-3/4 md:w-4/6 xl:h-16 xl:ml-24">
                <input placeholder="Search"  className="search-investor-input w-full border-2 border-teal-600 rounded py-1 px-2 md:px-3 md:py-2 lg:py-3 lg:px-5 xl:h-16 xl:text-lg placeholder:text-gray-400"  />
                <div className="search-div bg-teal-600 -mx-3 rounded-r w-12 xl:w-20 xl:h-16 flex justify-center items-center">
                    <img  className="h-6 xl:h-8" src={searchIcon} alt="search-icon" />
                </div>
            </div>
            <div className="filter-investors">
                <h3 className="filter-investors-title mt-10 md:mt-14 mb-2 md:mb-6 sm:text-xl mx-6 sm:mx-8 lg:mx-10 lg:text-2xl">Filter Investors:</h3>
                <Filter />
            </div>
            <div className="featured-investors mt-8">
                <button className="featured-investors-title px-2 rounded py-1 md:px-3 md:py-2 ml-6 sm:ml-8 md:mt-12 xl:text-[24px]">Featured Investors</button>
                <div className="investors">
                    <div className="investor sm:flex sm:mx-8 sm:items-center sm:space-x-6 lg:space-x-10  mt-6 py-8 mx-auto md:mx-auto md:w-11/12 lg:w-10/12 xl:w-11/12">
                        <img src={kemiAdetiba} alt="image of Kemi Adetiba" className="w-10/12 mx-auto sm:w-5/12 lg:w-11/12" />
                        <div className="about-investor w-10/12 mx-auto">
                            <h4 className="name-of-investor mt-4 text-lg sm:text-xl xl:text-[35px]">Kemi Adetiba</h4>
                            <ul className="investor-details flex flex-wrap space-x-5 mt-1 sm:mt-3 sm:space-x-0 md:space-x-8 xl:text-[24px]">
                                <li className="investor-job sm:mr-4 ">Venture Capitalist</li>
                                <li className="investor-location flex">
                                    <img src={locationIcon} alt="location-icon" className="h-6 mr-1"  />
                                    <p className="sm:mr-4">Lagos, Nigeria</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor sm:mt-3 xl:text-[24px]"> $45,000 - $60,000</p>
                        </div>
                    </div>
                    <div className="investor sm:flex sm:mx-8 sm:items-center sm:space-x-6 lg:space-x-10 mt-6 py-8 mx-auto md:mx-auto md:w-11/12 lg:w-10/12 xl:w-11/12">
                        <img src={cynthiaAsorock} alt="image of Cynthia Asorock" className="w-10/12 mx-auto sm:w-5/12 lg:w-1/2" />
                        <div className="about-investor w-10/12 mx-auto">
                            <h4 className="name-of-investor mt-4 text-lg sm:text-xl xl:text-[35px]">Cynthia Asorock</h4>
                            <ul className="investor-details flex flex-wrap space-x-5 mt-1 sm:mt-3 sm:space-x-0 md:space-x-8 xl:text-[24px]">
                                <li className="investor-job sm:mr-4">Angel Investor</li>
                                <li className="investor-location flex">
                                    <img src={locationIcon} alt="location-icon"  className="h-6 mr-1"/>
                                    <p>Nairobi, Kenya</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor sm:mt-4 xl:text-[24px]"> $30,000 - $80,000</p>
                        </div>
                    </div>
                    <div className="investor sm:flex sm:mx-8 sm:items-center sm:space-x-6 lg:space-x-10  mt-6 py-8 mx-auto md:mx-auto md:w-11/12 lg:w-10/12 xl:w-11/12">
                        <img src={felixAndrade} alt="image of Felix Andrade" className="w-10/12 mx-auto sm:w-5/12 lg:w-11/12" />
                        <div className="about-investor w-10/12 mx-auto">
                            <h4 className="name-of-investor text-lg mt-4 sm:text-xl xl:text-[35px]">Felix Andrade</h4>
                            <ul className="investor-details flex flex-wrap space-x-5 mt-1 sm:mt-3 sm:space-x-0 md:space-x-8 xl:text-[24px]">
                                <li className="investor-job sm:mr-4">Venture Capitalist</li>
                                <li className="investor-location flex">
                                    <img src={locationIcon} alt="location-icon" className="h-6 mr-1" />
                                    <p>New York</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor sm:mt-3 xl:text-[24px]"> $100,000 - $200,000</p>
                        </div>
                    </div>
                    <div className="investor sm:flex sm:mx-8 sm:items-center sm:space-x-6 lg:space-x-10 mt-6 py-8 mx-auto md:mx-auto md:w-11/12 lg:w-10/12 xl:w-11/12">
                        <img src={adesuaTomid} alt="image of Adesua Tomid" className="w-10/12 mx-auto sm:w-5/12 lg:w-11/12" />
                        <div className="about-investor w-10/12 mx-auto">
                            <h4 className="name-of-investor text-lg mt-4 sm:text-xl xl:text-[35px]">Adesua Tomid</h4>
                            <ul className="investor-details flex flex-wrap space-x-5 mt-1 sm:mt-3 sm:space-x-0 md:space-x-8 xl:text-[24px]">
                                <li className="investor-job sm:mr-4">Angel Investor</li>
                                <li className="investor-location flex">
                                    <img src={locationIcon} alt="location-icon" className="h-6 mr-1" />
                                    <p>Abuja, Nigeria</p>
                                </li>
                                <li className="investor-status">Active</li>
                            </ul>
                            <p className="salary-of-investor pb-6 sm:mt-3 xl:text-[24px]"> $500,000 - $800,000</p>
                        </div>
                    </div>
                </div>
                <div className="see-more mt-8">
                        <h3 className="text-lg text-center xl:text-[24px]">Do you want to see more?</h3>
                        <p className="text-center xl:text-[22px]">Join Trestle and be the first to connect with investors</p>
                        <form className="find-investor-form mt-6 flex flex-col items-center xl:text-[24px] placeholder:text-[50px]">
                            <label className="flex flex-col w-1/2">
                                Full Name:
                                <input placeholder="Enter full name"  className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500 bg-[#FFFFF0]"/>
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Email Address:
                                <input placeholder="Enter email address" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500  bg-[#FFFFF0]" />
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Password:
                                <input placeholder="Enter password" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500  bg-[#FFFFF0]" />
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Confirm Password:
                                <input placeholder="Re-enter password" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500  bg-[#FFFFF0]" />
                            </label>
                            <button className="my-8 py-1 px-3 rounded xl:px-8 xl:py-2">SIGN UP</button>
                        </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}