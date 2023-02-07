import catFood from "../assets/images/dry-cat-food.jpg"

const ImageHeader = () => {
  return (
    <>
      <img src={catFood} alt="cat-food" style={{ width: "100%" }} />
      <div className="w3-display-topleft w3-text-white" style={{ padding: "24px 48px" }}>
        <h1 className="w3-jumbo w3-hide-small">All your cat needs</h1>
        <h1 className="w3-hide-large w3-hide-medium">All your cat needs</h1>
        <h1 className="w3-hide-small">Healthy food and snacks & entertaining toys</h1>
        <p><a href="#jeans" className="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
      </div>
    </>
  )
}

export default ImageHeader;