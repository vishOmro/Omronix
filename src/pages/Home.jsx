import AboutUsSection from "../components/HomePageComponent/AboutUsSection.jsx"
import HeroSection from "../components/HomePageComponent/heroSection.jsx"
import Key from "../components/HomePageComponent/keyValueProposition.jsx"
import Product from "../components/HomePageComponent/Product.jsx"
// import ProductSnapShot from "../components/HomePageComponent/ProductSnapShot.jsx"
// import Card from "../components/Card"
// import Logo from "../assets/sample.webp"
import WhyOmronix from "../components/HomePageComponent/WhyOmronix.jsx"
const Home = () => {
  return (
    <>

    <div className="w-full min-h-screen  text-black bg-background-blue">
    <HeroSection />
    <AboutUsSection />
    <WhyOmronix />
    <Key />
    {/* <ProductSnapShot /> */}
    <Product />

  </div>
  </>
  )
}

export default Home