import groupLadies from "../images/group-ladies.png"

export default function AboutTrestle(){
    return(
        <div className="about-trestle about-trestle-home py-6 xl:py-12">
            <div className="about-trestle-writeup about-trestle-home-writeup text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl">What is Trestle?</h3>
                <p className="md:text-lg lg:text-xl w-10/12 xl:w-8/12 mx-auto mt-3">
                    Trestle is an online platform that allows small and medium business owners get funded in their various business by investors , providing them with the necessary funding and resources they need for their services.
                </p>
                <button className="learn-more-button px-3 py-2 rounded-lg mt-5 md:text-lg lg:text-xl ">
                    <a className="opacity-90">Learn more about us
                    </a>
                </button>
            </div>
            <div className="about-trestle-img about-trestle-home-img mt-8">
                <img  className="w-4/6 h-3/4 xl:w-3/5 mx-auto" src={groupLadies} alt="a group of ladies" />
            </div>
        </div>
    )
}