import Button from "../Components/Button"

const FooterTop = () => {
  return (
    <div className="flex items-center mb-5 justify-between">
        <h3 className="text-lg tablet:text-2xl font-bold text-white">Make your dreams a <span className="text-yellow-500">reality</span></h3>
        <Button text={"Work with us"} link={"/"} />
    </div>
  )
}

export default FooterTop