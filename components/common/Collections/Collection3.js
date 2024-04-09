import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ProductItems from "../product-box/ProductBox1";
import { Row, Col, Container, Media } from "reactstrap";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import search from "../../../public/assets/images/empty-search.jpg";

// const GET_PRODUCTS = gql`
//   query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
//     products(type: $type, indexFrom: $indexFrom, limit: $limit) {
//       items {
//         id
//         title
//         description
//         type
//         brand
//         category
//         price
//         new
//         stock
//         sale
//         discount
//         variants {
//           id
//           sku
//           size
//           color
//           image_id
//         }
//         images {
//           image_id
//           id
//           alt
//           src
//         }
//       }
//     }
//   }
// `;
const img1 = "/assets/images/schools/1.jpg";
const img2 = "/assets/images/schools/2.jpg";
const img3 = "/assets/images/schools/3.jpg";
const img4 = "/assets/images/schools/4.jpg";
const img5 = "/assets/images/schools/5.jpg";

const staticData = [
  {
    id: 1,
    title: "Beacon House School",
    description: "Description for Product 1",
    button: "view all >>",
    type: "Type A",
    brand: "Brand A",
    category: "Category A",
    price: 100,
    new: true,
    stock: 10,
    sale: false,
    discount: 0,
    variants: [
      {
        id: 1,
        sku: "SKU001",
        size: "Size A",
        color: "Color A",
        image_id: 1,
      },
    ],
    images: [
      {
        image_id: 1,
        id: 1,
        alt: "Product 1",
        src: img1,
      },
    ],
  },
  {
    id: 2,
    title: "Lahore Grammer Public School",
    description: "Description for Product 1",
    button: "view all >>",
    type: "Type A",
    brand: "Brand A",
    category: "Category A",
    price: 100,
    new: true,
    stock: 10,
    sale: false,
    discount: 0,
    variants: [
      {
        id: 2,
        sku: "SKU001",
        size: "Size A",
        color: "Color A",
        image_id: 2,
      },
    ],
    images: [
      {
        image_id: 2,
        id: 1,
        alt: "Product 1",
        src: img2,
      },
    ],
  },
  {
    id: 3,
    title: "Govt. High School lahore",
    description: "Description for Product 1",
    button: "view all >>",
    type: "Type A",
    brand: "Brand A",
    category: "Category A",
    price: 100,
    new: true,
    stock: 10,
    sale: false,
    discount: 0,
    variants: [
      {
        id: 3,
        sku: "SKU001",
        size: "Size A",
        color: "Color A",
        image_id: 2,
      },
    ],
    images: [
      {
        image_id: 3,
        id: 1,
        alt: "Product 1",
        src: img3,
      },
    ],
  },
  {
    id: 4,
    title: "City High School",
    description: "Description for Product 1",
    button: "view all >>",
    type: "Type A",
    brand: "Brand A",
    category: "Category A",
    price: 100,
    new: true,
    stock: 10,
    sale: false,
    discount: 0,
    variants: [
      {
        id: 4,
        sku: "SKU001",
        size: "Size A",
        color: "Color A",
        image_id: 4,
      },
    ],
    images: [
      {
        image_id: 4,
        id: 1,
        alt: "Product 1",
        src: img4,
      },
    ],
  },
  {
    id: 5,
    title: "American Lystuff School",
    description: "Description for Product 1",
    button: "view all >>",
    type: "Type A",
    brand: "Brand A",
    category: "Category A",
    price: 100,
    new: true,
    stock: 10,
    sale: false,
    discount: 0,
    variants: [
      {
        id: 5,
        sku: "SKU001",
        size: "Size A",
        color: "Color A",
        image_id: 4,
      },
    ],
    images: [
      {
        image_id: 5,
        id: 1,
        alt: "Product 1",
        src: img5,
      },
    ],
  },
  // Add more product objects as needed
];

const TopCollection = ({ type, title, subtitle, designClass, noSlider, cartClass, productSlider, titleClass, noTitle, innerClass, inner, backImage }) => {
  const context = useContext(CartContext);
  const contextWishlist = useContext(WishlistContext);
  const comapreList = useContext(CompareContext);
  const quantity = context.quantity;
  const [delayProduct, setDelayProduct] = useState(true);

  // var { loading, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: type,
  //     indexFrom: 0,
  //     limit: 8,
  //   },
  // });

  // useEffect(() => {
  //   if (data === undefined) {
  //     noSlider === false;
  //   } else {
  //     noSlider === true;
  //   }
  //   setTimeout(() => {
  //     setDelayProduct(false);
  //   }, 1);
  // }, [delayProduct]);

  useEffect(() => {
    setTimeout(() => {
      setDelayProduct(false);
    }, 1000);
  }, []);

  return (
    <div>
      <section className={designClass}>
        {noSlider ? (
          <Container>
            <Row>
              <Col>
                {noTitle === "null" ? (
                  ""
                ) : (
                  <div className={innerClass}>
                    {subtitle ? <h4>{subtitle}</h4> : ""}
                    <h2 className={inner}>{title}</h2>
                    {titleClass ? (
                      <hr role="tournament6" />
                    ) : (
                      <div className="line">
                        <span></span>
                      </div>
                    )}
                  </div>
                )}

                {delayProduct ? (
                  <div className="row mx-0 margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                  <Slider {...productSlider} 
                  // className="product-m no-arrow"
                  >
                    {/* {data &&
                      data.products.items.map((product, i) => (
                        <div key={i}>
                          <ProductItems product={product} title={title} addWishlist={() => contextWishlist.addToWish(product)} addCart={() => context.addToCart(product, quantity)} addCompare={() => comapreList.addToCompare(product)} cartClass={cartClass} backImage={backImage} />
                        </div>
                      ))} */}
                       {staticData.map((product, i) => (
                      <div key={i}>
                        <ProductItems
                          product={product}
                          title={title}
                          addWishlist={() => contextWishlist.addToWish(product)}
                          addCart={() => context.addToCart(product, quantity)}
                          addCompare={() => comapreList.addToCompare(product)}
                          cartClass={cartClass}
                          backImage={backImage}
                        />
                      </div>
                    ))}
                  </Slider>
                )}
              </Col>
              <div style={{textAlign:"center", marginTop: 20, marginBottom: 25,}}>
                <a className="btn btn-classic btn-outline" style={{borderColor: "#ffffff",}}>
                view All
              </a>
              </div>
            </Row>
          </Container>
        ) : (
          <>
            {title ? (
              <div className="title1 title-gradient  section-t-space">
                <h4>{subtitle}</h4>
                <h2 className="title-inner1">{title}</h2>
                <hr role="tournament6" />
              </div>
            ) : (
              ""
            )}
            <Container>
              <Row className="margin-default">
                {!data || !data.products || !data.products.items || !data.products.items.length === 0 || loading ? (
                  <div className="row margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                  data &&
                  data.products.items.slice(0, 8).map((product, index) => (
                    <Col xl="3" sm="6" key={index}>
                      <div>
                        <ProductItems product={product} backImage={backImage} addCompare={() => comapreList.addToCompare(product)} addWishlist={() => contextWishlist.addToWish(product)} title={title} cartClass={cartClass} addCart={() => context.addToCart(product, quantity)} key={index} />
                      </div>
                    </Col>
                  ))
                )}
              </Row>
            </Container>
          </>
        )}
      </section>
    </div>
  );
};

export default TopCollection;
