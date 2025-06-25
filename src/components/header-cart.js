import React, { useState } from 'react'
import SideCartTop from './cart/side-cart-top'
import SideCartBottom from './cart/side-cart-bottom'

export default function HeaderCart() {
  const [toggleMenu, setToggleMenu] = useState(null);
  const handleToggleClick = () => {
    if (toggleMenu == null) {
      setToggleMenu("ec-open");
    } else {
      setToggleMenu(null);
    }
  }

  return (
    <>
      <div className="header-icon"><i className="fi-rr-shopping-bag" onClick={() => handleToggleClick()}></i></div>
      <span className="ec-header-count cart-count-lable">33</span>


      {/* <!-- ekka Cart Start --> */}
      <div className="ec-side-cart-overlay"></div>
      <div id="ec-side-cart" className={`ec-side-cart ${toggleMenu}`}>
        <div className="ec-cart-inner">
          <div className="ec-cart-top">
            <SideCartTop handleToggleClick={handleToggleClick} />
          </div>
          <div className="ec-cart-bottom">
            <SideCartBottom />
          </div>
        </div>
      </div>
      {/* <!-- ekka Cart End --> */}
    </>
  )
}


