import Card from "./Card"
import Logo from "../../assets/sample.webp"
const KeyValueProposition = () => {
  return (
    <div className="ProductSection w-full min-h-screen flex flex-col justify-center items-center relative gap-10 bg-transparent">
                <h1 className="text-lg md:text-xl font-bold">KEY VALUE PROPOSITION</h1>
                <div className="cardSection flex justify-center flex-wrap w-full">
                      <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>
                      <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>
                      <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>
                </div>

        </div>
  )
}

export default KeyValueProposition