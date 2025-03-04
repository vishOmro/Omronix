import BlockChainDetail from "../components/AgenticAiComponent/AgenticAiDetail"
import Hero from "../components/AgenticAiComponent/Hero"
import WhyOmronix from "../components/AgenticAiComponent/WhyOmronix"

const Blockchain = () => {
  return (
    <div className="w-full min-h-screen  text-black bg-background-blue">
      <Hero />
      <WhyOmronix />
        <BlockChainDetail />
    </div>
  )
}

export default Blockchain