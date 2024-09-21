import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ProductDetails1 from "../../../assets/client/images/product-detail-01.jpg";
import ProductDetails2 from "../../../assets/client/images/product-detail-02.jpg";
import ProductDetails3 from "../../../assets/client/images/product-detail-03.jpg";
import Product1 from "../../../assets/client/images/product-01.jpg";
import Product2 from "../../../assets/client/images/product-02.jpg";
import Product3 from "../../../assets/client/images/product-03.jpg";
import Product4 from "../../../assets/client/images/product-04.jpg";
import Product5 from "../../../assets/client/images/product-05.jpg";
import Product6 from "../../../assets/client/images/product-06.jpg";
import Product7 from "../../../assets/client/images/product-07.jpg";
import Product8 from "../../../assets/client/images/product-08.jpg";
import icon_heart01 from "../../../assets/client/images/icons/icon-heart-01.png";
import icon_heart02 from "../../../assets/client/images/icons/icon-heart-02.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(ProductDetails1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [ProductDetails1, ProductDetails2, ProductDetails3];

  return (
    <div className="pt-5 bg-light">
      {/* Modal1 */}
      <div className="wrap-modal12 js-modal1 p-t-60 p-b-20">
        <div className="overlay-modal1 js-hide-modal1"></div>

        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  {/* Slider Section */}
                  <Slider {...settings}>
                    <div>
                      <div className="wrap-pic-w pos-relative">
                        <img src={ProductDetails1} alt="IMG-PRODUCT" />
                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href={ProductDetails1}
                        >
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="wrap-pic-w pos-relative">
                        <img src={ProductDetails2} alt="IMG-PRODUCT" />
                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href={ProductDetails2}
                        >
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="wrap-pic-w pos-relative">
                        <img src={ProductDetails3} alt="IMG-PRODUCT" />
                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href={ProductDetails3}
                        >
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Lightweight Jacket
                  </h4>

                  <span className="mtext-106 cl2">$58.79</span>

                  <p className="stext-102 cl3 p-t-23">
                    A jacket is an essential piece of clothing in everyone's
                    wardrobe, especially during colder seasons. Its primary
                    function is to keep the body warm, but it also plays a role
                    in defining style and showcasing personality. Jackets come
                    in a variety of designs, materials, and styles, such as
                    leather jackets, bomber jackets, trench coats, and denim
                    jackets. Each type offers different levels of warmth and
                    protection, making jackets both a functional and fashionable
                    choice for different occasions and weather conditions.
                  </p>

                  {/* Size and Color Options */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10 ">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next size">
                        <select className="js-select2" name="size">
                          <option>Please select compatible size</option>
                          <option>Size S</option>
                          <option>Size M</option>
                          <option>Size L</option>
                          <option>Size XL</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>
                      <div className="size-204 respon6-next size">
                        <select className="js-select2" name="color">
                          <option>Please select compatible color</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>White</option>
                          <option>Grey</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <button className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus"></i>
                          </button>

                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            defaultValue={1}
                          />

                          <button className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus"></i>
                          </button>
                        </div>

                        <Link to="/cart">
                          <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                            Add to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Social Sharing */}
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div class="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="#"
                        class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i class="zmdi zmdi-favorite"></i>
                      </a>
                    </div>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 tooltip100"
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
      <div className="pt-5">
        {/* <!-- Product --> */}
        <section class="bg0 p-t-23 p-b-140 pt-5">
          <div class="container pt-5">
            <div class="p-b-10">
              <h3 class="ltext-103 cl5">PRODUCTS YOU MAY LIKE</h3>
            </div>

            <div class="row isotope-grid">
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
      </div>
    </div>
  );
};

export default ProductDetails;
