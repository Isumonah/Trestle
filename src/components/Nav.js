
export default function Nav(){
    return (
      <nav>
        <h4 className="trestle-link">
            <a href="/" className="logo">TRESTLE</a>
        </h4>

            <div className="nav-pages"> 
                <ul>
                    <li>
                        <a href="/about" className="about-us">About Us</a>
                    </li>
                    <li>
                        <a href="/invest">Invest</a>
                    </li>
                    <li>
                        <a href="/find-investor">Find An Investor</a>
                    </li>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                    <li>
                        <a href="/success-stories">Success Stories</a>
                    </li>
                    
                </ul>
            </div>
                <div  className="login-signup"><button className="nav-login">LOG IN</button>
                <button className="nav-signup">SIGN UP</button>
            </div>
      </nav>
    );
}