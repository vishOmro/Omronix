import Navbar from "../components/navbar"
import Card from "../components/Card"
import Logo from "../assets/sample.webp"

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen  text-black">
    <Navbar />

    <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>
  </div>
  )
}

export default Home