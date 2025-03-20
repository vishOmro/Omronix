import AboutUsSection from "../components/AboutUsComponent/AboutUsDetails.jsx"
import HeroSection from "../components/AboutUsComponent/Hero.jsx"
import ChooseOmronix from "../components/AboutUsComponent/WhyOmronix.jsx"

const AboutUs = () => {
    return (
        <>
            <div className="w-full min-h-screen  text-black bg-background-blue">
                <HeroSection />
                <AboutUsSection />
                <ChooseOmronix />
            </div>
        </>
    )
}
export default AboutUs