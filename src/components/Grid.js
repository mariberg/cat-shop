import catFood from "../assets/images/dry-cat-food.jpg"

const Grid = () => {


  return (
    <>
      <div className="w3-col l3 s6">
        <div className="w3-container">
          <img src={catFood} style={{ width: "100%" }} />
          <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
        </div>
        <div className="w3-container">
          <img src={catFood} style={{ width: "100%" }} />
          <p>Mega Ripped Jeans<br /><b>$19.99</b></p>
        </div>
      </div>

      <div className="w3-col l3 s6">
        <div className="w3-container">
          <div className="w3-display-container">
            <img src={catFood} style={{ width: "100%" }} />
            <span className="w3-tag w3-display-topleft">New</span>
            <div className="w3-display-middle w3-display-hover">
              <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart"></i></button>
            </div>
          </div>
          <p>Mega Ripped Jeans<br /><b>$19.99</b></p>
        </div>
        <div className="w3-container">
          <img src={catFood} style={{ width: "100%" }} />
          <p>Washed Skinny Jeans<br /><b>$20.50</b></p>
        </div>
      </div>

      <div className="w3-col l3 s6">
        <div className="w3-container">
          <img src={catFood} style={{ width: "100%" }} />
          <p>Washed Skinny Jeans<br /><b>$20.50</b></p>
        </div>
        <div className="w3-container">
          <div className="w3-display-container">
            <img src={catFood} style={{ width: "100%" }} />
            <span className="w3-tag w3-display-topleft">Sale</span>
            <div className="w3-display-middle w3-display-hover">
              <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart"></i></button>
            </div>
          </div>
          <p>Vintage Skinny Jeans<br /><b className="w3-text-red">$14.99</b></p>
        </div>
      </div>

      <div className="w3-col l3 s6">
        <div className="w3-container">
          <img src={catFood} style={{ width: "100%" }} />
          <p>Vintage Skinny Jeans<br /><b>$14.99</b></p>
        </div>
        <div className="w3-container">
          <img src={catFood} style={{ width: "100%" }} />
          <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
        </div>
      </div>
    </>
  )
}

export default Grid;