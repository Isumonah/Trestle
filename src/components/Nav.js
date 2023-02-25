
export default function Nav(){
    return (
      <nav>
        <ul>
        <li>
            <a href="#" className="logo">TRESTLE</a>
          </li>
          <li>
            <a href="#" className="AU">About Us</a>
          </li>
          <li>
            <a href="#">Invest</a>
          </li>
          <li>
            <a href="#">Find An Investor</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Success Stories</a>
          </li>
          <li className="login"><button>LOG IN</button></li>
          <li className="Signup"><button>SIGN UP</button></li>
        </ul>
      </nav>
    );
}