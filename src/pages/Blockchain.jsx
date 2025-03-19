import BlockChainDetail from "../components/BlockChainPageComponent/BlockChainDetail"
import Hero from "../components/BlockChainPageComponent/Hero"
import Blsolutions from "../components/blsolutions"
// import WhyOmronix from "../components/BlockChainPageComponent/WhyOmronix"

const Blockchain = () => {
  return (
    <div className="w-full min-h-screen  text-black bg-background-blue">
      <Hero />
      {/* <WhyOmronix /> */}
      <Blsolutions />
        <BlockChainDetail />
    </div>
  )
}

export default Blockchain