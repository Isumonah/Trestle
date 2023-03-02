import groupLadies from "../images/group-ladies.png"

export default function AboutTrestle(){
    return(
        <div className="about-trestle about-trestle-home">
            <div className="about-trestle-writeup about-trestle-home-writeup">
                <h3>What is Trestle?</h3>
                <p>
                    Trestle is an online platform that allows small and medium business owners get funded in their various business by investors , providing them with the necessary funding and resources they need for their services.
                </p>
                <button className="learn-more-button">
                    <a>Learn more about us
                    </a>
                </button>
            </div>
            <div className="about-trestle-img about-trestle-home-img">
                <img src={groupLadies} alt="a group of ladies" />
            </div>
        </div>
    )
}