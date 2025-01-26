import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

function Slider() {
  useEffect(() => {
    function initializeSlick() {
      if ($('.slick1').length) {
        $('.slick1').slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear'
        });
      }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSlick);
      } else {
        initializeSlick();
      }
    }, []);




  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <div className="slick1">
          <div className="item-slick1" style={{ backgroundImage: 'url(images/slide-01.jpg)' }}>
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
                  <span className="ltext-101 cl2 respon2">
                    Women Collection 2018
                  </span>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                    NEW SEASON
                  </h2>
                </div>
                <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
                  <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides here */}
        </div>
      </div>
    </section>
  );
}

export default Slider;
