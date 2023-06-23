import adeolaSagoe from "../images/adeola-sagoe.png"
import tolase from "../images/tolase.png"
import smallCircle from "../images/small-circle.png"
import smallCircleGreen from "../images/small-circle-green.png"

import Footer from "./Footer"
import Nav from "./Nav"
import AboutTrestleHome from './AboutTrestleHome'

export default function Home(){
    return(
        <div className="home" id="home">
            <div className="home-nav">
            <Nav /></div>
            <div className="connect-people h-72 md:h-96 flex flex-col items-center justify-center space-y-4 xl:h-[700px] m-[20px] sm:m-[30px] xl:m-[60px]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:mr-40 xl:text-[50px]">TRESTLE</h1>
                <h2 className="text-xl mt-2 text-center md:text-2xl lg:text-3xl lg:max-w-lg lg:mr-10 xl:mr-[250px] xl:text-[35px] xl:leading-10">Connecting Business Owners with Potential Investors
                </h2>
                <button className="join-community-button rounded-lg px-2 lg:px-3 xl:px-4 xl:py-2 py-1 mt-2 md:text-xl lg:text-2xl xl:mr-40 xl:px-3 bg-[#0898A0] text-[#FFFFF0]">Join Our Community!</button>
            </div>
            <div className="home-owner-investor lg:flex bg-[#ADDDDF] lg:justify-center lg:py-12">
                <div className="home-owner flex flex-col items-center lg:h-[300px] justify-center py-10 md:py-12 lg:py-14 xl:h-[400px] xl:w-[700px] z-10" >
                  <h4 className="text-xl md:text-3xl lg:text-3xl">Are you a Business Owner?</h4>  
                  <p className="mt-1 md:text-2xl w-3/4 md:mt-4">We connect you to over a thousand investors with verified portfolios around Africa</p>
                  <button className="px-3 lg:px-4 py-1 lg:py-2 mt-2 md:mt-4 text-lg md:text-xl xl:mt-16 xl:ml-64"><a href="owner-application">Apply Now!</a></button>
                </div>
                <div className="home-investor flex flex-col py-10 md:py-12 lg:py-14 xl:mt-[65px] lg:h-[300px] xl:h-[400px] xl:w-[700px] xl:ml-[-80px] items-center lg:ml-[-50px] lg:mt-[40px]">
                  <h4 className=" text-xl md:text-3xl ">Are you an Investor?</h4>  
                  <p className="mt-1 md:text-2xl w-3/4 md:mt-4 xl:ml-20">Our platform reaches over 300,000 small and medium verified enterprises in Africa. Let's chat.</p>
                  <button className="px-3 py-1 lg:px-4 lg:py-2 mt-2 md:mt-4 text-lg md:text-xl xl:mt-16  xl:ml-96"><a href="/investor-application">Invest Now!</a></button>
                </div>
            </div>
            <div className="trestle-vision py-10 md:py-12 lg:py-14">
                <h3 className="text-2xl md:text-3xl lg:4xl text-center md:mt-4">THE TRESTLE VISION</h3>
                <p className="w-10/12 mx-auto text-lg md:text-xl lg:text-2xl mt-3 xl:w-9/12 xl:py-6">To be  a reputable and foremost  platform that  connect  SMEs in Africa to their potential investors from various sector(s) ranging from Agriculture, Finance, Education, Technology by providing them with the necessary funding and resources they need to increase there visibility within amd across Africa. We hope to raise not less than 10,000 African(s) in the space of five years to stardom through their businesses.</p>
            </div>
            <div className="trestle-corner py-10 md:py-12 px-6 sm:px-8 lg:px-12 xl:px-0">
                <div className="xl:w-11/12 xl:mx-auto">
                    <h3 className="trestle-corner-title text-2xl md:text-4xl text-center w-full">TRESTLE CORNER</h3>
                    <div className="business-mogul adeola flex flex-col xl:flex-row pb-6">
                        <img className="w-3/4 mx-auto mt-8 order-last xl:order-first" src={adeolaSagoe} alt="picture of Adeola Sagoe" />
                        <div className="business-mogul-writeup">
                            <h3 className="adeola-name text-xl md:text-2xl lg:text-3xl text-center mt-10">ADEOLA SAGOE</h3>
                            <p className="adeola-writeup text-lg md:text-xl lg:text-2xl  mt-2">Ms Deola Ade-Ojo is a Nigerian born fashion designer who is popularly known by her design name, Deola Sagoe. she began designing in 1988 when she join her mothers business with a view of expanding the labels repertoire to encompass more contemporary designs for ever-developing cosmopolitan high-brow society. Using Africa hand-woven materials in which she brought out life a range of distinct cultures; and contemporizing almost-lost traditional African techniques, Deola is well known for her uncanny attention to detail, her expert handling of diverse range of fabrics as well as her exemplary grasp of a wide range of female body types. She is celebrated back home for patriotism and zeal in Nigerian culture at large. </p>
                        </div>
                    </div>
                    <div className="business-mogul tolase business-mogul adeola flex flex-col xl:flex-row">
                        <div className="business-mogul-writeup">
                            <h3 className="tolase-name text-xl md:text-2xl lg:text-3xl text-center mt-16">TOLASE OLULEYE (NIG)</h3>
                            <p className="tolase-writeup text-lg md:text-xl lg:text-2xl mt-4">Meet Tolase our super biz of the month. Tolase is a graduate of economics from University of Ibadan, she holds a masters degree in Business Administration from Lagos Business school. After graduation Tolase wanted more for her life and she decided to start selling fabric but due to lack of fund Tolase could not expand as much as she wanted, she came across trestle and she pitched her idea and fortunately she finally found an investor and that is the beginning of her turn about within few months Tolase has sold more than 1million fabric across Africa. Tolase is our super star and we are proud of her success.
                            </p>
                        </div>
                            <img className="w-3/4 mx-auto mt-8 order-last " src={tolase} alt="picture of Tolase Oluleye" />
                    </div>
                    <div className="carousel">   <div className="carousel-btns flex mt-12 space-x-3">
                            <img src={smallCircleGreen} />
                            <img src={smallCircle} />
                            <img src={smallCircle} />
                    </div>
                    <p className="mt-3">Read more featured stories  ></p>
                    </div>
                </div>
            </div>
            <div className="home-about-trestle-div flex justify-center"> <AboutTrestleHome /></div>
            <div className="w-full">
                <Footer />
            </div>
            
        </div>
    )
}