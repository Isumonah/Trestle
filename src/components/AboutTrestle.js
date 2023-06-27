import groupLadies from "../images/group-ladies.png"

export default function AboutTrestle(){
    return(
        <div className="about-trestle  py-6">
            <div className="about-trestle-writeup text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">What is Trestle?</h3>
                <p className="md:text-lg lg:text-xl w-10/12 mx-auto mt-3 xl:text-2xl xl:w-9/12">
                    Trestle is an online platform that allows small and medium business owners get funded in their various business by investors , providing them with the necessary funding and resources they need for their services.
                </p>
                <button className="learn-more-button py-1 px-3 rounded mt-5 lg:text-2xl xl:py-2 px-4">
                    <a>Learn more about us
                    </a>
                </button>
            </div>
            <div className="about-trestle-img mt-8">
                <img  className="w-4/6 h-3/4 xl:w-3/5 mx-auto" src={groupLadies} alt="a group of ladies" />
            </div>
        </div>
    )
}