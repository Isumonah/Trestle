import fluid from "../images/fluid.png"
import groStock from "../images/gro-stock.png"
import jewelry from "../images/jewelry.png"
import bookConnect from "../images/book-connect.png"
import paycycle from "../images/paycycle.png"
import freshFinds from "../images/fresh-finds.png"
import audioly from "../images/audioly.png"
import youFeed from "../images/you-feed.png"
import healthPal from "../images/health-pal.png"


import AboutTrestle from "./AboutTrestle"
import Filter from "./Filter"
import Footer from "./Footer"
import Nav from "./Nav"

export default function Invest(){
    return(
        <div className="invest" id="invest">
            <div className="invest-nav">
            <Nav /></div>
            <div className="invest-heading flex mt-8 xl:mt-12 justify-between space-x-4 mx-6 sm:mx-8 lg:mx-10 xl:mx-12 ">
                <h1 className="text-xl md:text-3xl lg:text-4xl md:mb-16">Investment Opportunities</h1>
                <button className="funded-portfolio text-s px-1 sm:py-1 md:text-xl lg:text-2xl self-start">
                    <a href="">Funded Portfolio</a>
                </button>
            </div>
            <div className="invest-filter mt-6"> <Filter /></div>
            
            <div className="investment-options w-11/12 sm:grid grid-cols-2 lg:grid-cols-3 gap-x-6 sm:w-10/12 mx-auto mt-4 pb-4 mb-4 md:mb-20 max-w-[450px] sm:max-w-none">
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={fluid} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Fluid</h4>
                    <p className="mt-3 xl:text-xl">
                    An commerce platform designed to solve users problem of wrong fits for their clothing by incorporating a 3D animation feature that has the users size and skin tone. This will solve the<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={groStock} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Gro Stock</h4>
                    <p className="mt-3 xl:text-xl">
                    Gro Stock is an online grocery shopping application that aims to provide users with varieties of groceries and delivering their orders to their doorstep to save time and stress which will help curb<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={jewelry} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Gold Jewelery</h4>
                    <p className="mt-3 xl:text-xl">
                    Gold provides a great sales opportunity for jewelers and allow consumers to shop 24/7 which help store owners to reach a wider consumer base and increase market share. It also allows consu<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={bookConnect} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Bookonnect</h4>
                    <p className="mt-3 xl:text-xl">
                    Focused on solving students problem of having access to needed textbooks with zero cost through a recycling process. This ensures that book pollution is managed and there is improved rec<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={paycycle} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Paycycle</h4>
                    <p className="mt-3 xl:text-xl">
                    A plastic waste management application that offers users the opportunity to neatly and timely dispose their and manage their plastic waste through recycling and also getting paid and will help<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={freshFinds} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Fresh Finds</h4>
                    <p className="mt-3 xl:text-xl">
                    Fresh Finds ia an ecommerce platform that aims to revolutionize the way consumers buy and sell groceries. By offering  wide range of products, from staple grain to dairy items<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={audioly} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Audioly FT</h4>
                    <p className="mt-3 xl:text-xl">
                    An NFT Musical market place that gives upcoming musicians and creatives full ownership of their work, giving them a platform for publicity and to make earnings by sharing<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={youFeed} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">You Feed</h4>
                    <p className="mt-3 xl:text-xl">
                    You Feed seeks to reduce wastage of food as well as solve the hunger problem in the world by linking charity organizations with donor in order to make donations easier and faster which will help<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
                <div className="investment-option mt-8 md:mt-16 flex flex-col mx-6 sm:flex-none sm:mx-0 items-start">
                    <img className="sm:order-first" src={healthPal} alt="image of investment option" />
                    <h4 className="text-lg order-first text-center sm:text-start md:text-xl mb-3 sm:mb-0 sm:mt-3
                    ">Health Pal</h4>
                    <p className="mt-3 xl:text-xl">
                    An online platform that allows virtual interactions between individuals and health related services providing optimum ecommerce options and personalized modern health services<a>...Read more</a>
                    </p>
                    <button className=" px-3 py-1 rounded mt-3 text-sm md:text-lg">FUND NOW</button>
                </div>
            </div>
            <AboutTrestle />
            <Footer />
        </div>
    )
}