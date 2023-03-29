import settings from "../images/settings.png"
import adesuaTomid from "../images/adesua-tomid.png"
import AboutTrestleHome from "./AboutTrestleHome"
import Footer from "./Footer"


export default function InvestorApplication (){
    return(
        <div className=" business-owner-application">
            <nav className="business-owner-application-nav p-4 xl:px-20 w-full">
                <ul className="m-0 p-0 w-full flex text-sm items-center xl:justify-between ">
                    <li className="text-base text-teal-600 xl:text-3xl"><a href="/" className="the-trestle-logo">TRESTLE</a></li>
                    <div className="flex xl:space-x-12">
                        <li className="flex space-x-1 text-xs xl:text-lg ml-6 items-center">
                            <img src={settings} className="h-4" />
                            <p className="text-gray-400 xl:text-lg">Account settings</p>
                        </li>
                        <li className="ml-5 text-xs bg-teal-600 px-3 py-1 rounded-lg text-white opacity-90 xl:text-lg"><a>Log Out</a></li>
                    </div>
                </ul>
            </nav>
            <div className="flex justify-between mx-28 mt-16">
                <div className="">
                    <h2 className="xl:text-3xl">Hello Tomide, Tell Us About Yourself</h2>
                    <p className="opacity-50 w-3/4 mt-3 xl:text-lg">Please fill the following details to help us connect you with great enterprise.</p>
                </div>
                <img src={adesuaTomid} className="h-28 rounded-full" />
            </div>
            <form className="flex flex-col xl:mx-28 xl:mt-10">
                <label className="text-lg ">Full Name <input placeholder="e.g Nathan Smith" className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3 placeholder:text-teal-600 placeholder:opacity-70"></input></label>
                <label className="text-lg xl:mt-10"><span className="block xl:mb-3">Location</span>
                    <div className="flex justify-between">
                    <select name="country" className=" border w-6/12 xl:mr-12 xl:px-8 xl:py-4 rounded-lg border-teal-600 opacity-70">
                        <option value="Country">Country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    <select name="state" className="border w-6/12 xl:ml-12  xl:px-5 xl:py-4 rounded-lg border-teal-600 opacity-70">
                        <option value="State">State</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Oyo">Oyo</option>
                    </select>
                    </div>
                </label>
                <label className="text-lg mt-6 xl:mt-10">Email Address <input type="email"  className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3"></input></label>
                <label className="text-lg mt-6 xl:mt-10">Phone Number <input  className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3"></input></label>
                <label className="text-lg mt-6 xl:mt-10">Years of Experience <input  className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3"></input></label>
                <label className="text-lg mt-6 xl:mt-10">Industry
                    <select name="Select your industry" className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3">
                    <option value="Select your industry" className="">Select your industry</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Finance">Finance</option>
                    <option value="Human Resources">Human Resources</option>
                    </select>
                </label>
                <label className="text-lg mt-6 xl:mt-10">Type of Investor
                    <select name="Select your preference" className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3">
                    <option value="Select your preference" className="">Select your preference</option>
                    <option value="angel-investor">Angel Investor</option>
                    <option value="peer-to-peer-lender">Peer-to-Peer Lender</option>
                    <option value="Venture-Capitalists">Human Resources</option>
                    </select>
                </label>
                <label className="text-lg mt-6 xl:mt-10">Preferred Investment Rate in US Dollars
                    <select name="Preferred Investment rate in US Dollars" className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3">
                    <option value="Select your investment rate" className="">Select your investment rate</option>
                    <option value="0-10%">0-10%</option>
                    <option value="10-20%">10-20%</option>
                    <option value="20-30%">20-30%</option>
                    <option value="15-20%">40-50%</option>
                    <option value="50-60%">50-60%</option>
                    <option value="60-70%">60-70%</option>
                    <option value="70-80%">70-80%</option>
                    <option value="80-90%">80-90%</option>
                    <option value="90-1000%">90-100%</option>
                    </select>
                </label>
                <label className="text-lg mt-6 xl:mt-10">Please choose a preferred platform, day and time for a virtual chat with our team
                    <select name="Select your preference" className="block border w-full xl:px-5 xl:py-4 rounded-lg border-teal-600 xl:mt-3">
                    <option value="Select your preference" className="">Select your preference</option>
                    <option value="zoom">zoom</option>
                    <option value="Google Meet">Google Meet</option>
                    <option value="Microsoft Teams">Microsoft Teams</option>
                    </select>
                </label>
                <div className="flex xl:mt-10">
                    <label className="text-lg w-full xl:mr-12"><span className="block xl:mb-3">Day</span>
                    <input type="date" className="border border-teal-600 xl:py-4 px-3 w-full rounded-lg"></input>
                    </label>
                    <label className="text-lg w-full xl:ml-12"><span className="block xl:mb-3">Time</span>
                    <input type="time" className="border border-teal-600 xl:py-4 px-3 w-full rounded-lg"></input>
                    </label>
                </div>
                
                <button className="rounded-lg bg-teal-600 w-32 text-white mx-auto text-lg mt-28 py-2"><a href="/application-received-investor">Submit</a></button>
            </form>
            <div className="ml-10 mt-32">
                <AboutTrestleHome />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}