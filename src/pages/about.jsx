import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function about() {
  return (
    <div>
      


      <div>
  {/* Cart */}
  <div className="wrap-header-cart js-panel-cart">
    <div className="s-full js-hide-cart" />
    <div className="header-cart flex-col-l p-l-65 p-r-25">
      <div className="header-cart-title flex-w flex-sb-m p-b-8">
        <span className="mtext-103 cl2">
          Your Cart
        </span>
        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
          <i className="zmdi zmdi-close" />
        </div>
      </div>
      <div className="header-cart-content flex-w js-pscroll">
        <ul className="header-cart-wrapitem w-full">
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-01.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                White Shirt Pleat
              </a>
              <span className="header-cart-item-info">
                1 x $19.00
              </span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-02.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                Converse All Star
              </a>
              <span className="header-cart-item-info">
                1 x $39.00
              </span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="images/item-cart-03.jpg" alt="IMG" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                Nixon Porter Leather
              </a>
              <span className="header-cart-item-info">
                1 x $17.00
              </span>
            </div>
          </li>
        </ul>
        <div className="w-full">
          <div className="header-cart-total w-full p-tb-40">
            Total: $75.00
          </div>
          <div className="header-cart-buttons flex-w w-full">
            <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
              View Cart
            </a>
            <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
              Check Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Title page */}
  <div style={{color: 'white'}}>
          <BreadCrumps pageName="About"/>
        </div>	
  {/* Content page */}
  <section className="bg0 p-t-75 p-b-120">
    <div className="container">
      <div className="row p-b-148">
        <div className="col-md-7 col-lg-8">
          <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
            <h3 className="mtext-111 cl2 p-b-16">
              Our Story
            </h3>
            <p className="stext-113 cl6 p-b-26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
            </p>
            <p className="stext-113 cl6 p-b-26">
              Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. 
            </p>
            <p className="stext-113 cl6 p-b-26">
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
          </div>
        </div>
        <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
          <div className="how-bor1 ">
            <div className="hov-img0">
              <img src="images/about-01.jpg" alt="IMG" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
          <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
            <h3 className="mtext-111 cl2 p-b-16">
              Our Mission
            </h3>
            <p className="stext-113 cl6 p-b-26">
              Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
            </p>
            <div className="bor16 p-l-29 p-b-9 m-t-22">
              <p className="stext-114 cl6 p-r-40 p-b-11">
                Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
              </p>
              <span className="stext-111 cl8">
                - Steve Job’s 
              </span>
            </div>
          </div>
        </div>
        <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
          <div className="how-bor2">
            <div className="hov-img0">
              <img src="images/about-02.jpg" alt="IMG" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>







    </div>
  )
}

export default about