import React, {useState, useEffect} from 'react';

import Products from './Products';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FetchProducts, useCategories } from "../fetchProducts";


function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getProducts = async () => {
        const data = await FetchProducts();
        setProducts(data); // Properly store products in state
      };
      getProducts();
    }, []);
  
  const categories = useCategories();
  
  return (
    <div>

  {/* <!-- Cart --> */}
	{/* <div className="wrap-header-cart js-panel-cart">
		<div className="s-full js-hide-cart"></div>

		<div className="header-cart flex-col-l p-l-65 p-r-25">
			<div className="header-cart-title flex-w flex-sb-m p-b-8">
				<span className="mtext-103 cl2">
					Your Cart
				</span>

				<div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
					<i className="zmdi zmdi-close"></i>
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
	</div> */}

		
  {/* <!-- Slider --> */}
	<section className="section-slide" style={{marginTop:'100px', }}>
		<div className  ="wrap-slick1">
			<div className="slick1">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
    >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="item-slick1"
                    style={{
                      backgroundImage: `url("http://localhost:3010/uploads/products/${product.photo}")`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'right',
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      height: '600px' 
                    }}
                  >
                    <div className="container h-full">
                      <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                        <div className="layer-slick1 animated">
                          <span className="ltext-101 cl2 respon2">
                            New Collection 2024
                          </span>
                        </div>

                        <div className="layer-slick1 animated">
                          <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                            {product.name}
                          </h2>
                        </div>

                        <div className="layer-slick1 animated">
                          <a
                            href="products"
                            className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

      {/* <SwiperSlide><div className="item-slick1" style={{ backgroundImage: 'url(images/slide-02.jpg)' }}>
					<div className="container h-full">
						<div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div className="layer-slick1 animated" data-appear="rollIn" data-delay="0">
								<span className="ltext-101 cl2 respon2">
									Men New-Season
								</span>
							</div>
								
							<div className="layer-slick1 animated" data-appear="lightSpeedIn" data-delay="800">
								<h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
									Jackets & Coats
								</h2>
							</div>
								
							<div className="layer-slick1 animated" data-appear="slideInUp" data-delay="1600">
								<a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
									Shop Now
								</a>
							</div>
						</div>
					</div>
				</div></SwiperSlide>
      <SwiperSlide><div className="item-slick1" style={{ backgroundImage: 'url(images/slide-03.jpg)' }}>
					<div className="container h-full">
						<div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div className="layer-slick1 animated " data-appear="rotateInDownLeft" data-delay="0">
								<span className="ltext-101 cl2 respon2">
									Men Collection 2018
								</span>
							</div>
								
							<div className="layer-slick1 animated " data-appear="rotateInUpRight" data-delay="800">
								<h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
									New arrivals
								</h2>
							</div>
								
							<div className="layer-slick1 animated " data-appear="rotateIn" data-delay="1600">
								<a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
									Shop Now
								</a>
							</div>
						</div>
					</div>
				</div></SwiperSlide> */}
    </Swiper>
			</div>
		</div>
	</section>



  <div>
  {/* Banner */}
  <div className="sec-banner bg0 p-t-80 p-b-50">
    <div className="container">
      <div className="row">

              {categories.map((category) => (

        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
          <div className="block1 wrap-pic-w">
                    <img src={`http://localhost:3010/uploads/categories/${category.photo}`} alt="IMG-BANNER" /> 
            <a href="Products" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
              <div className="block1-txt-child1 flex-col-l">
                <span className="block1-name ltext-102 trans-04 p-b-8">
                  {category.name}
                </span>
                <span className="block1-info stext-102 trans-04">
                          {category.description}
                </span>
              </div>
              <div className="block1-txt-child2 p-b-4 trans-05">
                <div className="block1-link stext-101 cl0 trans-09">
                  Shop Now
                </div>
              </div>
            </a>
          </div>
        </div>
              ))}


      </div>
    </div>
  </div>
  </div>



  

  <div>
  {/* Back to top */}
  <div className="btn-back-to-top" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="zmdi zmdi-chevron-up" />
    </span>
  </div>
  {/* Modal1 */}
  <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
    <div className="overlay-modal1 js-hide-modal1" />
    <div className="container">
      <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
        <button className="how-pos3 hov3 trans-04 js-hide-modal1">
          <img src="images/icons/icon-close.png" alt="CLOSE" />
        </button>
        <div className="row">
          <div className="col-md-6 col-lg-7 p-b-30">
            <div className="p-l-25 p-r-30 p-lr-0-lg">
              <div className="wrap-slick3 flex-sb flex-w">
                <div className="wrap-slick3-dots" />
                <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                <div className="slick3 gallery-lb">
                  <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
                    <div className="wrap-pic-w pos-relative">
                      <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" />
                      <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                  <div className="item-slick3" data-thumb="images/product-detail-02.jpg">
                    <div className="wrap-pic-w pos-relative">
                      <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />
                      <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                  <div className="item-slick3" data-thumb="images/product-detail-03.jpg">
                    <div className="wrap-pic-w pos-relative">
                      <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" />
                      <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 p-b-30">
            <div className="p-r-50 p-t-5 p-lr-0-lg">
              <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                Lightweight Jacket
              </h4>
              <span className="mtext-106 cl2">
                $58.79
              </span>
              <p className="stext-102 cl3 p-t-23">
                Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
              </p>
              {/*  */}
              <div className="p-t-33">
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-203 flex-c-m respon6">
                    Size
                  </div>
                  <div className="size-204 respon6-next">
                    <div className="rs1-select2 bor8 bg0">
                      <select className="js-select2" name="time">
                        <option>Choose an option</option>
                        <option>Size S</option>
                        <option>Size M</option>
                        <option>Size L</option>
                        <option>Size XL</option>
                      </select>
                      <div className="dropDownSelect2" />
                    </div>
                  </div>
                </div>
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-203 flex-c-m respon6">
                    Color
                  </div>
                  <div className="size-204 respon6-next">
                    <div className="rs1-select2 bor8 bg0">
                      <select className="js-select2" name="time">
                        <option>Choose an option</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>White</option>
                        <option>Grey</option>
                      </select>
                      <div className="dropDownSelect2" />
                    </div>
                  </div>
                </div>
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-204 flex-w flex-m respon6-next">
                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                      <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-minus" />
                      </div>
                      <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                      <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-plus" />
                      </div>
                    </div>
                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                      Add to cart
                    </button>
                  </div>
                </div>	
              </div>
              {/*  */}
              <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                <div className="flex-m bor9 p-r-10 m-r-11">
                  <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                    <i className="zmdi zmdi-favorite" />
                  </a>
                </div>
                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                  <i className="fa fa-google-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<Products />






















    </div>
  )
}

export default Home