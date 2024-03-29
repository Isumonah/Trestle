
import About from "./components/About"
import FindInvestor from "./components/FindInvestor"
import Invest from "./components/Invest"
import Footer from "./components/Footer"
import Home from "./components/Home"
import SuccessStories from "./components/SuccessStories"
import Events from "./components/Events"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import InvestorApplication from "./components/InvestorApplication"
import BusinessOwnerApplication from "./components/BusinessOwnerApplication"
import ApplicationReceivedBusiness from "./components/ApplicationReceivedBusiness"
import ApplicationReceivedInvestor from "./components/ApplicationReceivedInvestor"



export default function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/invest" element={<Invest/>} />
                    <Route path="find-investor" element={<FindInvestor />} />
                    <Route path="events" element={<Events />} />
                    <Route path="success-stories" element={<SuccessStories />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="investor-application" element={<InvestorApplication />} />
                    <Route path="business-owner-application" element={<BusinessOwnerApplication />} />
                    <Route path="application-received-business" element={<ApplicationReceivedBusiness />} />
                    <Route path="application-received-investor" element={<ApplicationReceivedInvestor />} />

                </Routes>
            </Router>
            </>
          
        
    )
}