import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/shopingCart');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="container-menu-desktop">
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
              <div className="right-top-bar flex-w h-full">
                <a href="Help" className="flex-c-m trans-04 p-lr-25">
                  Help & FAQs
                </a>
                <a href="My-Account" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </a>
                <a href="EN" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>
                <a href="USD" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>

          <div
            className="wrap-menu-desktop"
            style={{ backgroundColor: 'rgba(250,250,250,0.2)', height: '100px' }}
          >
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <a href="/" className="logo">
                <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>

              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="Products">Shop</a>
                  </li>
                  <li className="label1" data-label1="hot">
                    <Link to="/shopingCart">Go to Cart</Link>
                  </li>
                  <li>
                    <a href="blog">Blog</a>
                  </li>
                  <li>
                    <a href="about">About</a>
                  </li>
                  <li>
                    <a href="contact">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search"
                  onClick={() => navigate('/search')}
                >
                  <i className="zmdi zmdi-search"></i>
                </div>

                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-cart"
                  onClick={handleCartClick}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                  {/* Cart count */}
                  {cartCount > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-10px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '2px 5px',
                        fontSize: '12px',
                      }}
                    >
                      {cartCount}
                    </span>
                  )}
                </div>

                <a
                  href="/"
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11"
                  data-notify="0"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo mobile */}
          <div className="logo-mobile">
            <a href="/">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
            </a>
          </div>

          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search"
              onClick={() => navigate('/search')}
            >
              <i className="zmdi zmdi-search"></i>
            </div>

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 js-show-cart"
              onClick={handleCartClick}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <i className="zmdi zmdi-shopping-cart"></i>
              {/* Mobile Cart Count */}
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-10px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 5px',
                    fontSize: '12px',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </div>

            <a
              href="favorites"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10"
              data-notify="0"
            >
              <i className="zmdi zmdi-favorite-outline"></i>
            </a>
          </div>

          {/* Button show menu */}
          <div
            className="btn-show-menu-mobile hamburger hamburger--squeeze"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`menu-mobile ${isMobileMenuOpen ? 'show-menu-mobile' : ''}`}
        >
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>
            <li>
              <div className="right-top-bar flex-w h-full">
                <a href="Help" className="flex-c-m p-lr-10 trans-04">
                  Help & FAQs
                </a>
                <a href="My-Account" className="flex-c-m p-lr-10 trans-04">
                  My Account
                </a>
                <a href="EN" className="flex-c-m p-lr-10 trans-04">
                  EN
                </a>
                <a href="USD" className="flex-c-m p-lr-10 trans-04">
                  USD
                </a>
              </div>
            </li>
          </ul>

          <ul className="main-menu-m">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="Products">Shop</a>
            </li>
            <li>
              <Link to="/shopingCart">Cart</Link>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
