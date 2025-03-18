import Services from "../components/AgenticAiComponent/services.jsx"
import Hero from "../components/AgenticAiComponent/Hero.jsx"
import WhyOmronix from "../components/AgenticAiComponent/WhyOmronix.jsx"
import Solutions from "../components/solutions.jsx"

const Blockchain = () => {
  return (
    <div className="w-full min-h-screen  text-black bg-background-blue">
      <Hero />
      <WhyOmronix />
      <Solutions />
      <Services />
       
    </div>
  )
}

export default Blockchain