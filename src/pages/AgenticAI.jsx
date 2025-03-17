import Services from "../components/AgenticAiComponent/services"
import Hero from "../components/AgenticAiComponent/Hero"
import WhyOmronix from "../components/AgenticAiComponent/WhyOmronix"
import Solutions from "../components/solutions"

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