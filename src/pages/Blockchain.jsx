import BlockChainDetail from "../components/BlockChainPageComponent/BlockChainDetail"
import Hero from "../components/BlockChainPageComponent/Hero"
import WhyOmronix from "../components/BlockChainPageComponent/WhyOmronix"

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