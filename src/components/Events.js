import Nav from "./Nav";
import Footer from "./Footer";

import eventsImg from "../images/events-img.png"

export default function Events(){
    return(
        <div className="events" id="event">
            <div className="events-nav">
                <Nav />
           </div>
           <div className="events-img">
                <div className="events-info">
                    <button className="next-event-button">Next Event</button>
                    <h1>The Trestle Global Investors Summit</h1>
                    <p>Theme: Advancing the world, <span>one startup at a time.</span></p>
                    <button className="get-ticket">Get Your Ticket</button>
                </div>
           </div>
           <div className="upcoming-events">
                <button className="upcoming-events-button">Upcoming Events</button>
                <div className="all-upcoming-events">
                    <div className="upcoming-event">
                    <h4>INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event">
                    <h4>FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event">
                    <h4>INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event">
                    <h4>FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event">
                    <h4>INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event">
                    <h4>FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event">
                    <h4>INVESTING AND TECH</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    <div className="upcoming-event">
                    <h4>FUNDING IN 2023</h4>
                    <p>This event is focused on investing as a way of contribution to SMEs, Startups, Enterprises and empowering businesses in tech, and encouraging creative ideas in the industry . . . <a>Read more > </a></p> 
                    <div className="events-date-div">
                    <p>April 10th, 2023 8:00 AM GMT</p>
                    <button className="upcoming-event-get-ticket">GET YOUR TICKET</button>
                    </div>
                    </div>
                    
                </div>
                <div className="invest-signup">
                    <h4>TRESTLE</h4>
                    <p><span>Investing? </span> Register to invest at our next event</p>
                    <button>SIGN UP</button>
                </div>
           </div>
           <Footer />
        </div>
    )
}