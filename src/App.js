
import About from "./components/About"
import FindInvestor from "./components/FindInvestor"
import Invest from "./components/Invest"
import Footer from "./components/Footer"
import Home from "./components/Home"
import SuccessStories from "./components/SuccessStories"
import Events from "./components/Events"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



export default function App(){
    return(
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/invest" element={<Invest/>} />
                    <Route path="find-investor" element={<FindInvestor />} />
                    <Route path="event" element={<Event />} />
                    <Route path="success-stories" element={<SuccessStories />} />
                </Routes>
            </Router>
          
        
    )
}