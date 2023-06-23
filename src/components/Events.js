import Nav from "./Nav";
import Footer from "./Footer";

import eventsImg from "../images/events-img.png"

export default function Events(){
    return(
        <div className="events" id="event">
            <div className="events-nav">
                <Nav />
           </div>
           <div className="events-img bg-cover h-64 sm:h-96 md:h-[700px] flex justify-center items-center text-center border-2">
                <div className="events-info py-3 bg-[#FFFFF0] bg-opacity-[0.5] sm:p-6 md:p-12">
                    <button className="next-event-button mx-auto text-[14px] sm:text-[18px] px-3 md:text-[22px] lg:text-[25px] lg:py-1">Next Event</button>
                    <h1 className="text-[17px] sm:text-[20px] text-[#0898A0] mt-3 sm:mt-4 lg:text-[23px]">The Trestle Global Investors Summit</h1>
                    <p className="text-[13px]mt-2 sm:mt-4 sm:text-[18px] lg:text-[21px]">Theme: Advancing the world, <span className="text-[#0898A0]">one startup at a time.</span></p>
                    <button className="get-ticket mx-auto text-[14px] sm:text-[16px] lg:text-[18px] px-2 lg:py-1 mt-3 sm:mt-4">Get Your Ticket</button>
                </div>
           </div>
           <div className="upcoming-events w-10/12 sm:w-9/12 mx-auto text-[14px] sm:text-[18px]">
                <button className="upcoming-events-button mt-6 sm:mt-10 px-2 text-[16px] sm:text-[19px]">Upcoming Events</button>
                <div className="all-upcoming-events mt-4 sm:mt-5 lg:grid lg:grid-cols-2 lg:gap-10">
                    <div className="upcoming-event">
                    <h4 className="text-[15px] sm:text-[19px]">INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event mt-2 sm:mt-4">
                    <h4 className="text-[15px] sm:text-[19px]">FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2 sm:mt-4">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event mt-2 sm:mt-4">
                    <h4 className="text-[15px] sm:text-[19px]">INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event mt-2 sm:mt-4">
                    <h4 className="text-[15px] sm:text-[19px]">FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2 sm:mt-4">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event mt-2 sm:mt-4">
                    <h4 className="text-[15px] sm:text-[19px]">INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event mt-2 sm:mt-4">
                    <h4 className="text-[15px] sm:text-[19px]">FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2 sm:mt-4">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event mt-2 sm:mt-4">
                    <h4 className="text-[15px] sm:text-[19px]">INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event mt-2 sm:mt-4">
                    <h4 className="text-[15px] sm:text-[19px]">FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div flex justify-between mt-2 sm:mt-4">
                    <p className="text-[13px] sm:text-[16px]">April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] ">GET YOUR TICKET</button>
                    </div>
                    </div>
                    
                </div>
                <div className="invest-signup flex flex-col justify-center items-center mt-10 space-y-2 sm:mt-12 " >
                    <h4 className="text-[16px] sm:text-[20px]">TRESTLE</h4>
                    <p className="w-6/12 mx-auto text-center"><span>Investing? </span> Register to invest at our next event</p>
                    <button className="text-[12px] sm:text-[15px] p-1 sm:px-2">SIGN UP</button>
                </div>
           </div>
           <div className="mt-8">
                <Footer />
            </div>
           
        </div>
    )
}