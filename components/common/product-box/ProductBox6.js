import React, { Fragment, useState, useContext } from "react";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { Media, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import Link from "next/link";
import CartContext from "../../../helpers/cart";
import { useRouter } from "next/router";
import MasterProductDetail from "./MasterProductDetail";

const ProductSection = ({ product, addToComapre, addWishlist, addCart }) => {
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const cartContext = useContext(CartContext);
  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  const router = useRouter();

  const [modalCompare, setModalCompare] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleCompare = () => setModalCompare(!modalCompare);
  const uniqueTags = [];

  const clickProductDetail = () => {
    const titleProps = product?.schoolName.split(" ").join("");
    router.push(`/product-details/${product?._id}` + "-" + `${titleProps}`);
  };

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <Fragment>
      {product !== undefined ? (
        <div className="product-box">
          <div className="img-wrapper">
            <div className="front">
              <a href={null}>
                {product?.picture !== undefined ? (
                  <div className={`market-bg${product.picture}`}></div>
                ) : (
                  <div className="front" onClick={clickProductDetail}>
                    <Media
                      src={product.images[0].src}
                      className="img-fluid bg-img blur-up lazyload"
                      alt=""
                    />
                  </div>
                )}
              </a>
            </div>
            <div className="cart-info cart-wrap">
              <a
                href={null}
                title="Add to Wishlist"
                tabIndex="0"
                onClick={addWishlist}
              >
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
              <a href={null} title="Quick View" onClick={toggle}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
              <Modal
                isOpen={modal}
                toggle={toggle}
                className="modal-lg quickview-modal mt-4"
              >
                <ModalBody>
                  <Row>
                    <Col lg="6" xs="12">
                      <div className="quick-view-img">
                        <Media
                          src={product.images[0].src}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg="6" className="rtl-text">
                      <div className="product-right">
                        <h2> {product?.schoolName} </h2>
                        <h3>
                          {currency.symbol}
                          {(product.price * currency.value).toFixed(2)}
                        </h3>
                        {product.variants ? (
                          <ul className="color-variant">
                            {uniqueTags ? (
                              <ul className="color-variant">
                                {uniqueTags.map((vari, i) => {
                                  return (
                                    <li
                                      className={vari.color}
                                      key={i}
                                      title={vari.color}
                                      onClick={() =>
                                        variantChangeByColor(
                                          vari.image_id,
                                          product.images
                                        )
                                      }
                                    ></li>
                                  );
                                })}
                              </ul>
                            ) : (
                              ""
                            )}
                          </ul>
                        ) : (
                          ""
                        )}
                        <div className="border-product">
                          <h6 className="product-title">product details</h6>
                          <p>{product?.schoolName}</p>
                        </div>
                        <div className="product-description border-product">
                          {product.size ? (
                            <div className="size-box">
                              <ul>
                                {product?.map((size, i) => {
                                  return (
                                    <li key={i}>
                                      <a href={null}>{size}</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                          <h6 className="product-title">quantity</h6>
                          <div className="qty-box">
                            <div className="input-group">
                              <span className="input-group-prepend">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  onClick={minusQty}
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i className="fa fa-angle-left"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                name="quantity"
                                value={quantity}
                                onChange={changeQty}
                                className="form-control input-number"
                              />
                              <span className="input-group-prepend">
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  onClick={() => plusQty(product)}
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i className="fa fa-angle-right"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product-buttons">
                          <button
                            className="btn btn-solid"
                            onClick={() => addCart(product, quantity)}
                          >
                            add to cart
                          </button>
                          <button
                            className="btn btn-solid"
                            onClick={clickProductDetail}
                          >
                            View detail
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
              <a href={null} title="Compare" onClick={toggleCompare}>
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </a>
              <Modal
                isOpen={modalCompare}
                toggle={toggleCompare}
                className="modal-content"
                centered
              >
                <ModalHeader toggle={toggleCompare}>Quick View</ModalHeader>
                <ModalBody>
                  <Row className="compare-modal">
                    <Col lg="12">
                      <div className="media">
                        <Media
                          src={product.images[0].src}
                          alt=""
                          className="img-fluid"
                        />
                        <div className="media-body align-self-center text-center">
                          <h5>
                            <i className="fa fa-check"></i>Item{" "}
                            <span>{product?.schoolName} </span>
                            <span>
                              {" "}
                              successfully added to your Compare list
                            </span>
                          </h5>
                          <div className="buttons d-flex justify-content-center">
                            <Link
                              href="/page/compare"
                              className="btn-sm btn-solid"
                            >
                              {/* <a
                                href={null}
                                
                                onClick={addToComapre}
                              > */}
                              View Compare list
                              {/* </a> */}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
            </div>
            <div
              className="add-button"
              data-toggle="modal"
              data-target="#addtocart"
              onClick={addCart}
            >
              add to cart
            </div>
          </div>

          <MasterProductDetail
            product={product}
            currency={currency}
            uniqueTags={uniqueTags}
          />
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ProductSection;
