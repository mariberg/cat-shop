import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Subscribe from "./Subscribe"
import catFood from "../assets/images/dry-cat-food.jpg"

const Layout = () => {

  function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  //! this one doesn't work like this, cannot read properties of null (reading 'click')
  // Click on the "Jeans" link on page load to open the accordion for demo purposes
  //document.getElementById("myBtn").click();


  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }





  return (
    <div className="w3-content" style={{ maxWidth: "1200px" }}>

      <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{ zIndex: 3, width: "250px" }} id="mySidebar">
        <Sidebar />
      </nav>





      {/* Top menu on small screens */}
      <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
        <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
        <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={w3_open
        }><i className="fa fa-bars"></i></a>
      </header>

      {/*Overlay effect when opening sidebar on small screens */}
      <div className="w3-overlay w3-hide-large" onClick={w3_close} style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>


      {/* !PAGE CONTENT! */}
      <div className="w3-main" style={{ marginLeft: "250px" }}>

        {/* Push down content on small screens */}
        <div className="w3-hide-large" style={{ marginTop: "83px" }}></div>

        {/* Top header */}
        <header className="w3-container w3-xlarge">
          <p className="w3-left">Jeans</p>
          <p className="w3-right">
            <i className="fa fa-shopping-cart w3-margin-right"></i>
            <i className="fa fa-search"></i>
          </p>
        </header>

        {/* Image header */}
        <div className="w3-display-container w3-container">
          <img src={catFood} alt="cat-food" style={{ width: "100%" }} />
          <div className="w3-display-topleft w3-text-white" style={{ padding: "24px 48px" }}>
            <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
            <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
            <h1 className="w3-hide-small">COLLECTION 2016</h1>
            <p><a href="#jeans" className="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
          </div>
        </div>

        <div className="w3-container w3-text-grey" id="jeans">
          <p>8 items</p>
        </div>

        {/* Product grid */}
        <div className="w3-row w3-grayscale">
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
        </div>

        {/* Subscribe section */}
        <div className="w3-container w3-black w3-padding-32">
          <Subscribe />
        </div>

        {/* Footer */}
        <footer className="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
          <Footer />
        </footer>

        <div className="w3-black w3-center w3-padding-24">Powered by <a href="https:{/*www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-opacity">w3.css</a></div>

        {/* End page content */}
      </div>

      {/* Newsletter Modal 
      <div id="newsletter" className="w3-modal">
        <div className="w3-modal-content w3-animate-zoom" style="padding:32px">
          <div className="w3-container w3-white w3-center">
            <i onClick={document.getElementById('newsletter').style.display = 'none'} className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"></i>
            <h2 className="w3-wide">NEWSLETTER</h2>
            <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
            <p><input className="w3-input w3-border" type="text" placeholder="Enter e-mail" /></p>
            <button type="button" className="w3-button w3-padding-large w3-red w3-margin-bottom" onClick={document.getElementById('newsletter').style.display = 'none'}
            >Subscribe</button>
          </div>
        </div>
      </div>
      */}

    </div>
  )
}

export default Layout;