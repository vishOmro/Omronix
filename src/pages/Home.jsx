import AboutUsSection from "../components/HomePageComponent/AboutUsSection"
import HeroSection from "../components/HomePageComponent/heroSection"
import KeyValueProposition from "../components/HomePageComponent/keyValueProposition"

import Product from "../components/HomePageComponent/Product"
import ProductSnapShot from "../components/HomePageComponent/ProductSnapShot"
// import Card from "../components/Card"
// import Logo from "../assets/sample.webp"

const Home = () => {
  return (
    <>

    <div className="w-full min-h-screen  text-black bg-background-blue">
    <HeroSection />
    <AboutUsSection />
    <KeyValueProposition />
    <ProductSnapShot />
    <Product />

  </div>
  </>
  )
}

export default Home