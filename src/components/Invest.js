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

export default function Invest(){
    return(
        <div className="invest">
            <div className="invest-heading">
                <h1>Investment Opportunities</h1>
                <button className="funded-portfolio">
                    <a href="">Funded Portfolio</a>
                </button>
            </div>
            <div className="invest-filter"> <Filter /></div>
            
            <div className="investment-options">
                <div className="investment-option">
                    <img src={fluid} alt="image of investment option" />
                    <h4>Fluid</h4>
                    <p>
                    An commerce platform designed to solve users problem of wrong fits for their clothing by incorporating a 3D animation feature that has the users size and skin tone. This will solve the<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={groStock} alt="image of investment option" />
                    <h4>Gro Stock</h4>
                    <p>
                    Gro Stock is an online grocery shopping application that aims to provide users with varieties of groceries and delivering their orders to their doorstep to save time and stress which will help curb<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={jewelry} alt="image of investment option" />
                    <h4>Gold Jewelery</h4>
                    <p>
                    Gold provides a great sales opportunity for jewelers and allow consumers to shop 24/7 which help store owners to reach a wider consumer base and increase market share. It also allows consu<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={bookConnect} alt="image of investment option" />
                    <h4>Bookonnect</h4>
                    <p>
                    Focused on solving students problem of having access to needed textbooks with zero cost through a recycling process. This ensures that book pollution is managed and there is improved rec<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={paycycle} alt="image of investment option" />
                    <h4>Paycycle</h4>
                    <p>
                    A plastic waste management application that offers users the opportunity to neatly and timely dispose their and manage their plastic waste through recycling and also getting paid and will help<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={freshFinds} alt="image of investment option" />
                    <h4>Fresh Finds</h4>
                    <p>
                    Fresh Finds ia an ecommerce platform that aims to revolutionize the way consumers buy and sell groceries. By offering  wide range of products, from staple grain to dairy items<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={audioly} alt="image of investment option" />
                    <h4>Audioly FT</h4>
                    <p>
                    An NFT Musical market place that gives upcoming musicians and creatives full ownership of their work, giving them a platform for publicity and to make earnings by sharing<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={youFeed} alt="image of investment option" />
                    <h4>You Feed</h4>
                    <p>
                    You Feed seeks to reduce wastage of food as well as solve the hunger problem in the world by linking charity organizations with donor in order to make donations easier and faster which will help<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
                <div className="investment-option">
                    <img src={healthPal} alt="image of investment option" />
                    <h4>Health Pal</h4>
                    <p>
                    An online platform that allows virtual interactions between individuals and health related services providing optimum ecommerce options and personalized modern health services<a>...Read more</a>
                    </p>
                    <button>FUND NOW</button>
                </div>
            </div>
            <AboutTrestle />
        </div>
    )
}