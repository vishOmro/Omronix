import AboutUsSection from "../components/HomePageComponent/AboutUsSection.jsx"
import HeroSection from "../components/HomePageComponent/heroSection.jsx"
import KeyValueProposition from "../components/HomePageComponent/keyValueProposition.jsx"

import Product from "../components/HomePageComponent/Product.jsx"
import ProductSnapShot from "../components/HomePageComponent/ProductSnapShot.jsx"
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