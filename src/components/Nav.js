
import { NavLink } from "react-router-dom"


export default function Nav(){
    document.querySelectorAll(".nav-pages-link").forEach(link => {
        if(link.href === window.location.href){
            link.setAttribute("aria-current", "page")
            console.log("anna")
        }
    })

    return (
      <nav className="nav py-4 xl:py-6">
        <div className="flex justify-between px-6 sm:px-8 lg:px-12 xl:w-11/12 xl:mx-auto xl:px-0">
             <h4 className="trestle-link">
            <a href="/" className="logo text-[20px] sm:text-[22px] md:text-[24px] lg:text-[30px] xl:text-[42px]">TRESTLE</a>
            </h4>
            <div  className="login-signup text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[30px]"><button className="nav-login rounded py-[2px] w-[70px] md:w-[100px] xl:w-[140px]"><a href="sign-in">LOG IN</a></button>
                <button className="nav-signup py-[2px] w-[70px] md:w-[100px] xl:w-[140px] rounded ml-2 lg:ml-4"><a href="sign-up">SIGN UP</a></button>
            </div>
        </div>
        <div className="nav-pages mt-3 sm:mt-4 xl:w-11/12 xl:mx-auto"> 
                <ul className=" w-full flex text-[13px] sm:text-[18px] md:text-[20px] lg:text-[25px] xl:text-[32px] justify-between px-6 sm:px-8 lg:px-10 xl:px-0 text-[#908989]">
                    <li>
                        <a href="/about" className="about-us nav-pages-link">About Us</a>
                    </li>
                    <li>
                        <a className="nav-pages-link" href="/invest">Invest</a>
                    </li>
                    <li>
                        <a className="nav-pages-link" href="/find-investor">Find An Investor</a>
                    </li>
                    <li>
                        <a className="nav-pages-link" href="/events">Events</a>
                    </li>
                    <li>
                        <a className="nav-pages-link" href="/success-stories">Success Stories</a>
                    </li>
                    
                </ul>
        </div>
            
      </nav>
    );
}