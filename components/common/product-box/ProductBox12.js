import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Row,
  Col,
  Media,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
  Button,
} from "reactstrap";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CartContext from "../../../helpers/cart";
import CardTable from "./CardTable";
import { Drawer } from "antd";
import SendQuery from "../../forms1/SendQuery";
import AdmissionForm from "../../forms1/AdmissionForm";
import CallBack from "../../forms1/CallBack";
import JobForm from "../../forms1/JobForm";
const ProductItem = ({
  product,
  addCart,
  addWishlist,
  addToCompare,
  spanClass,
}) => {
  const [isAdmit, setAdmit] = useState(false);
  const [isquery, setQuery] = useState(false);
  const [isCall, SetCall] = useState(false);
  const [isApply, SetApply] = useState(false);

  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;

  const router = useRouter();
  const cartContext = useContext(CartContext);

  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  const [modal, setModal] = useState(false);
  const [modalCompare, setModalCompare] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleCompare = () => setModalCompare(!modalCompare);
  const uniqueTags = [];

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = () => {
    // const titleProps = product?.title.split(" ").join("");
    router.push(`/product-details/${product?._id}`, undefined, {
      shallow: true,
    });
  };

  let RatingStars = [];
  let rating = 5;
  for (var i = 0; i < rating; i++) {
    RatingStars.push(<i className="fa fa-star" key={i}></i>);
  }
  return (
    <div className="product-box ">
      <div className="school-card">
        <div className="img-wrapper col-4">
          <div className="lable-block">
            {product.new === "true" ? <span className="lable3">new</span> : ""}
            {product.sale === "true" ? (
              <span className="lable4">on sale</span>
            ) : (
              ""
            )}
          </div>
          <div className="front12">
            <a clas href={null}>
              <Media
                alt=""
                // src={product?.images[0].src}
                src="https://images2.boardingschoolreview.com/photo/593/IMG-Academy-6r5kz9j4u144kso44sw8800k0-1122.jpg"
                className="img-fluid blur-up lazyload bg-img"
              />
            </a>
          </div>
          <div className="cart-info cart-wrap">
            <a href={null} title="Add to Wishlist" onClick={addWishlist}>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </a>
            <button onClick={addCart} title="Add to cart">
              <i className="fa fa-shopping-cart"></i>
              {spanClass ? <span>Add to cart</span> : ""}
            </button>
            <a href={null} title="Compare" onClick={toggleCompare}>
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </a>
            <Modal isOpen={modalCompare} toggle={toggleCompare} centered>
              <ModalHeader toggle={toggleCompare}>Quick View</ModalHeader>
              <ModalBody>
                <Row className="compare-modal">
                  <Col lg="12">
                    <div className="media">
                      <Media
                        // src={product?.images[0].src}
                        src="https://images2.boardingschoolreview.com/photo/593/IMG-Academy-6r5kz9j4u144kso44sw8800k0-1122.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="media-body align-self-center text-center">
                        <h5>
                          <i className="fa fa-check"></i>Item{" "}
                          <span>{product?.shoolName} </span>
                          <span> successfully added to your Compare list</span>
                        </h5>
                        <div className="buttons d-flex justify-content-center">
                          <Link
                            href="/page/compare"
                            className="btn-sm btn-solid"
                          >
                            {/* <a
                            
                            onClick={addToCompare}
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

          <div className="rating card12">{RatingStars}</div>
        </div>
        <div className="product-info-12 col-6">
          {/* <div className="rating">{RatingStars}</div> */}
          <h3 style={{ marginBottom: "0px", marginTop: "5px" }}>
            {product?.schoolName}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: 10,
              alignItems: "center",
            }}
          >
            <h6>{product?.city}</h6>

            <a href="https://maps.app.goo.gl/EmX8usn2222z1vUb8" target="_blank">
              <i className="fa fa-map-marker" style={{ marginBottom: 10 }}>
                {" "}
                Find on map
              </i>
            </a>
          </div>

          <div className="cardTabel">
            <CardTable product={product} />
          </div>

          <div className="compare-section">
            <a
              href={null}
              title="Add to Wishlist"
              onClick={addWishlist}
              alt="Add to whishlist"
            >
              <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
            </a>
            <button
              onClick={toggleCompare}
              title="Compare"
              className="btn-compare"
            >
              Compare
            </button>
            <a href={null} title="Share" onClick={toggleCompare} alt="Share">
              <i className="fa fa-share-alt fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="card-button col-2">
          <button
            style={{
              backgroundColor: "#27BFFF",
              backgroundImage: "none",
              border: "none",
              width: "86%",
              marginTop: "2px",
              borderTopRightRadius: "10px",
            }}
            className="btn btn-solid school"
            onClick={() => {
              SetCall(true);
            }}
          >
            Call Back
          </button>
          <button
            style={{
              backgroundColor: "#BB86FC",
              backgroundImage: "none",
              border: "none",
              width: "86%",
            }}
            className="btn btn-solid school"
            onClick={() => {
              setQuery(!isquery);
            }}
          >
            Send Query
          </button>
          <button
            style={{
              backgroundColor: "#F1C40F",
              backgroundImage: "none",
              border: "none",
              width: "86%",
            }}
            className="btn btn-solid school"
            onClick={() => {
              setAdmit(true);
            }}
          >
            Get Admission
          </button>
          <button
            style={{
              backgroundColor: "#90C643",
              backgroundImage: "none",
              border: "none",
              width: "86%",
            }}
            className="btn btn-solid school"
            onClick={() => {
              SetCall(true);
            }}
          >
            Apply For Job
          </button>
          <button
            style={{
              backgroundColor: "#91278F",
              backgroundImage: "none",
              border: "none",
              marginBottom: "2px",
              borderBottomRightRadius: "10px",
              padding: "10px",
              width: "100%",
            }}
            onClick={clickProductDetail}
            className="btn btn-solid school"
          >
            More details
          </button>
        </div>
      </div>
      <Drawer
        height={500}
        width={1000}
        open={isAdmit}
        onClose={() => {
          setAdmit(false);
        }}
        title={"Admission Form for Child"}
      >
        <AdmissionForm />
      </Drawer>
      <Drawer
        height={500}
        width={1000}
        open={isquery}
        onClose={() => {
          setQuery(false);
        }}
        title={"Send Query Form "}
      >
        {" "}
        <SendQuery />
      </Drawer>
      <Drawer
        height={500}
        width={1000}
        open={isCall}
        onClose={() => {
          SetCall(false);
        }}
        title={"Call Back Form "}
      >
        {" "}
        <CallBack />
      </Drawer>
      <Drawer
        height={500}
        width={1000}
        open={isApply}
        onClose={() => {
          SetCall(false);
        }}
        title={"Apply For Job "}
      >
        {" "}
        <JobForm />
      </Drawer>
    </div>
  );
};

export default ProductItem;
