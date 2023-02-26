
import About from "./components/About"
import FindInvestor from "./components/FindInvestor"
import Invest from "./components/Invest"
import Footer from "./components/Footer"
import Home from "./components/Home"
import SuccessStories from "./components/SuccessStories"
// import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App(){
    return(
        <div>
            {/* <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<About />} />
                    <Route exact path="/invest" element={<Invest />} />
                    <Route exact path="/find-investor" element={<FindInvestor />} />
                </Routes>
            </BrowserRouter> */}
            <SuccessStories />
           
            
        </div>
        
    )
}