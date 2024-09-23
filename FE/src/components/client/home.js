import React, { useState } from "react";
import Banner1 from "../../assets/client/images/banner-01.jpg";
import Banner2 from "../../assets/client/images/banner-02.jpg";
import Banner3 from "../../assets/client/images/banner-03.jpg";
import Product1 from "../../assets/client/images/product-01.jpg";
import Product2 from "../../assets/client/images/product-02.jpg";
import Product3 from "../../assets/client/images/product-03.jpg";
import Product4 from "../../assets/client/images/product-04.jpg";
import Product5 from "../../assets/client/images/product-05.jpg";
import Product6 from "../../assets/client/images/product-06.jpg";
import Product7 from "../../assets/client/images/product-07.jpg";
import Product8 from "../../assets/client/images/product-08.jpg";
import icon_heart01 from "../../assets/client/images/icons/icon-heart-01.png";
import icon_heart02 from "../../assets/client/images/icons/icon-heart-02.png";
import Slider from "react-slick";


const Home = () => {
  const [activeColor, setActiveColor] = useState("Blue");

  const colors = [
    { name: "Black", colorCode: "#222" },
    { name: "Blue", colorCode: "#4272d7" },
    { name: "Grey", colorCode: "#b3b3b3" },
    { name: "Green", colorCode: "#00ad5f" },
    { name: "Red", colorCode: "#fa4251" },
    { name: "White", colorCode: "#aaa" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <section className="section-slide">
        <div className="wrap-slick1">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div
              className="item-slick1 background-slick1"
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div
                    className="layer-slick1"
                    data-appear="fadeInDown"
                    data-delay="0"
                  >
                    <span className="ltext-101 cl2 respon2">
                      Women Collection 2018
                    </span>
                  </div>
                  <div
                    className="layer-slick1"
                    data-appear="fadeInUp"
                    data-delay="800"
                  >
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      NEW SEASON
                    </h2>
                  </div>
                  <div
                    className="layer-slick1"
                    data-appear="zoomIn"
                    data-delay="1600"
                  >
                    <a
                      href="product.html"
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className="item-slick1 background-slick2"
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div
                    className="layer-slick1"
                    data-appear="rollIn"
                    data-delay="0"
                  >
                    <span className="ltext-101 cl2 respon2">
                      Men New-Season
                    </span>
                  </div>
                  <div
                    className="layer-slick1"
                    data-appear="lightSpeedIn"
                    data-delay="800"
                  >
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      Jackets & Coats
                    </h2>
                  </div>
                  <div
                    className="layer-slick1"
                    data-appear="slideInUp"
                    data-delay="1600"
                  >
                    <a
                      href="product.html"
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div
              className="item-slick1 background-slick3"
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div
                    className="layer-slick1"
                    data-appear="rotateInDownLeft"
                    data-delay="0"
                  >
                    <span className="ltext-101 cl2 respon2">
                      Men Collection 2018
                    </span>
                  </div>
                  <div
                    className="layer-slick1"
                    data-appear="rotateInUpRight"
                    data-delay="800"
                  >
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      New arrivals
                    </h2>
                  </div>
                  <div
                    className="layer-slick1"
                    data-appear="rotateIn"
                    data-delay="1600"
                  >
                    <a
                      href="product.html"
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Banner */}
      <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src={Banner1} alt="IMG-BANNER" />
                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Women
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      Spring 2018
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

            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src={Banner2} alt="IMG-BANNER" />
                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Men
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      Spring 2018
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

            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src={Banner3} alt="IMG-BANNER" />
                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Accessories
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      New Trend
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
          </div>
        </div>
      </div>

      {/* <!-- Product --> */}
      <section class="bg0 p-t-23 p-b-140">
        <div class="container">
          <div class="p-b-10">
            <h3 class="ltext-103 cl5">Product Overview</h3>
          </div>

          <div class="flex-w flex-sb-m p-b-52">
            <div class="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                data-filter="*"
              >
                All Products
              </button>

              <button
                class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".women"
              >
                Women
              </button>

              <button
                class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".men"
              >
                Men
              </button>

              <button
                class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".bag"
              >
                Bag
              </button>

              <button
                class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".shoes"
              >
                Shoes
              </button>

              <button
                class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".watches"
              >
                Watches
              </button>
            </div>

            <div class="flex-w flex-c-m m-tb-10">
              <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div>

              <div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>

            {/* <!-- Search product --> */}
            <div class="dis-none panel-search w-full p-t-10 p-b-15">
              <div class="bor8 dis-flex p-l-15">
                <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i class="zmdi zmdi-search"></i>
                </button>

                <input
                  class="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* <!-- Filter --> */}
            <div class="dis-none panel-filter w-full p-t-10">
              <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div class="filter-col1 p-r-15 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Sort By</div>

                  <ul>
                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Default
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Popularity
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Average rating
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a
                        href="#"
                        class="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Newness
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Price: Low to High
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        Price: High to Low
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="filter-col2 p-r-15 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Price</div>

                  <ul>
                    <li class="p-b-6">
                      <a
                        href="#"
                        class="filter-link stext-106 trans-04 filter-link-active"
                      >
                        All
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $0.00 - $50.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $50.00 - $100.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $100.00 - $150.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $150.00 - $200.00
                      </a>
                    </li>

                    <li class="p-b-6">
                      <a href="#" class="filter-link stext-106 trans-04">
                        $200.00+
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="filter-col3 p-r-15 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Color</div>

                  <ul>
                    {colors.map((color) => (
                      <li key={color.name} className="p-b-6">
                        <span
                          className="fs-15 lh-12 m-r-6"
                          style={{ color: color.colorCode }}
                        >
                          <i
                            className={`zmdi zmdi-circle${
                              activeColor === color.name ? "" : "-o"
                            }`}
                          ></i>
                        </span>
                        <a
                          href="#"
                          className={`filter-link stext-106 trans-04${
                            activeColor === color.name
                              ? " filter-link-active"
                              : ""
                          }`}
                          onClick={() => setActiveColor(color.name)}
                        >
                          {color.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="filter-col4 p-b-27">
                  <div class="mtext-102 cl2 p-b-15">Tags</div>

                  <div class="flex-w p-t-4 m-r--5">
                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Lifestyle
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Denim
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>

                    <a
                      href="#"
                      class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row isotope-grid">
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product1} alt="IMG-PRODUCT" />

                  <a
                 href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product2} alt="IMG-PRODUCT" />

                  <a
                  href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product3} alt="IMG-PRODUCT" />

                  <a
                  href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product4} alt="IMG-PRODUCT" />

                  <a
                  href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product5} alt="IMG-PRODUCT" />

                  <a
                  href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>  
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product6} alt="IMG-PRODUCT" />

                  <a
                  href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product7} alt="IMG-PRODUCT" />

                  <a
                  href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src={Product8} alt="IMG-PRODUCT" />

                  <a
                   href="/products/details"
                    class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">$16.64</span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        class="icon-heart1 dis-block trans-04"
                        src={icon_heart01}
                        alt="ICON"
                      />
                      <img
                        class="icon-heart2 dis-block trans-04 ab-t-l"
                        src={icon_heart02}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          

          {/* <!-- Load more --> */}
          <div class="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up"></i>
        </span>
      </div>

      {/* Modal1 */}
      <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
        <div className="overlay-modal1 js-hide-modal1"></div>

        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal1">
              <img src="images/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots"></div>
                    <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                    <div className="slick3 gallery-lb">
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-01.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-01.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-01.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>

                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-02.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-02.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-02.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>

                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-03.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-03.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-03.jpg"
                          >
                            <i className="fa fa-expand"></i>
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

                  <span className="mtext-106 cl2">$58.79</span>

                  <p className="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>

                  {/*  */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Size S</option>
                            <option>Size M</option>
                            <option>Size L</option>
                            <option>Size XL</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Grey</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus"></i>
                          </div>

                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            value="1"
                          />

                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus"></i>
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
                      <a
                        href="#"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite"></i>
                      </a>
                    </div>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
