const Sidebar = () => {
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  return (
    <>
      <div className="w3-container w3-display-container w3-padding-16">
        <i onClick={w3_close} className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
        <h3 className="w3-wide"><b>LOGO</b></h3>
      </div>
      <div className="w3-padding-64 w3-large w3-text-grey" style={{ fontWeight: "bold" }}>
        <a href="#" className="w3-bar-item w3-button">Cat Food</a>
        <a href="#" className="w3-bar-item w3-button">Cat Toys</a>
        {/*<a onClick={myAccFunc} href="javascript:void(0)" className="w3-button w3-block w3-white w3-left-align" id="myBtn">
            Jeans <i className="fa fa-caret-down"></i>
  </a>*/}
        <div id="demoAcc" className="w3-bar-block w3-hide w3-padding-large w3-medium">
          <a href="#" className="w3-bar-item w3-button w3-light-grey"><i className="fa fa-caret-right w3-margin-right"></i>Gifts</a>
        </div>
        <a href="#" className="w3-bar-item w3-button">Gifts</a>
      </div>
      <a href="#footer" className="w3-bar-item w3-button w3-padding">Contact</a>
      {/*<a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding" onClick={document.getElementById('newsletter').style.display = 'block'}>Newsletter</a>*/}
      <a href="#footer" className="w3-bar-item w3-button w3-padding">Subscribe</a>
    </>
  )
}

export default Sidebar;