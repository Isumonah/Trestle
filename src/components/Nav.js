
import { NavLink } from "react-router-dom"

export default function Nav(){
    document.querySelectorAll(".nav-pages-link").forEach(link => {
        if(link.href === window.location.href){
            link.setAttribute("aria-current", "page")
            console.log("anna")
        }
    })

    return (
      <nav>
        <h4 className="trestle-link">
            <a href="/" className="logo">TRESTLE</a>
        </h4>

            <div className="nav-pages"> 
                <ul>
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
                <div  className="login-signup"><button className="nav-login"><a href="sign-in">LOG IN</a></button>
                <button className="nav-signup"><a href="sign-up">SIGN UP</a></button>
            </div>
      </nav>
    );
}