import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ProductItem from "../product-box/ProductBox1";
import CartContext from "../../../helpers/cart/index";
import { Container, Row, Col, Media } from "reactstrap";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import emptySearch from "../../../public/assets/images/empty-search.jpg";
import Slider from "react-slick";
import { useEffect } from "react";
import axios from "axios";
import { message } from "antd";
//import img1 from "../../../public/assets/images/watch/cat1.png";

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

// const img1 = "/assets/images/schools/1.jpg";
// const img2 = "/assets/images/schools/2.jpg";
// const img3 = "/assets/images/schools/3.jpg";
// const img4 = "/assets/images/schools/4.jpg";
// const img5 = "/assets/images/schools/5.jpg";

// const staticData = [
//   {
//     id: 1,
//     title: "Beacon House School",
//     description: "Description for Product 1",
//     button: "view all >>",
//     type: "Type A",
//     brand: "Brand A",
//     category: "Category A",
//     price: 100,
//     new: true,
//     stock: 10,
//     sale: false,
//     discount: 0,
//     variants: [
//       {
//         id: 1,
//         sku: "SKU001",
//         size: "Size A",
//         color: "Color A",
//         image_id: 1,
//       },
//     ],
//     images: [
//       {
//         image_id: 1,
//         id: 1,
//         alt: "Product 1",
//         src: img1,
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Lahore Grammer Public School",
//     description: "Description for Product 1",
//     button: "view all >>",
//     type: "Type A",
//     brand: "Brand A",
//     category: "Category A",
//     price: 100,
//     new: true,
//     stock: 10,
//     sale: false,
//     discount: 0,
//     variants: [
//       {
//         id: 2,
//         sku: "SKU001",
//         size: "Size A",
//         color: "Color A",
//         image_id: 2,
//       },
//     ],
//     images: [
//       {
//         image_id: 2,
//         id: 1,
//         alt: "Product 1",
//         src: img2,
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Govt. High School lahore",
//     description: "Description for Product 1",
//     button: "view all >>",
//     type: "Type A",
//     brand: "Brand A",
//     category: "Category A",
//     price: 100,
//     new: true,
//     stock: 10,
//     sale: false,
//     discount: 0,
//     variants: [
//       {
//         id: 3,
//         sku: "SKU001",
//         size: "Size A",
//         color: "Color A",
//         image_id: 2,
//       },
//     ],
//     images: [
//       {
//         image_id: 3,
//         id: 1,
//         alt: "Product 1",
//         src: img3,
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "City High School",
//     description: "Description for Product 1",
//     button: "view all >>",
//     type: "Type A",
//     brand: "Brand A",
//     category: "Category A",
//     price: 100,
//     new: true,
//     stock: 10,
//     sale: false,
//     discount: 0,
//     variants: [
//       {
//         id: 4,
//         sku: "SKU001",
//         size: "Size A",
//         color: "Color A",
//         image_id: 4,
//       },
//     ],
//     images: [
//       {
//         image_id: 4,
//         id: 1,
//         alt: "Product 1",
//         src: img4,
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "American Lystuff School",
//     description: "Description for Product 1",
//     button: "view all >>",
//     type: "Type A",
//     brand: "Brand A",
//     category: "Category A",
//     price: 100,
//     new: true,
//     stock: 10,
//     sale: false,
//     discount: 0,
//     variants: [
//       {
//         id: 5,
//         sku: "SKU001",
//         size: "Size A",
//         color: "Color A",
//         image_id: 4,
//       },
//     ],
//     images: [
//       {
//         image_id: 5,
//         id: 1,
//         alt: "Product 1",
//         src: img5,
//       },
//     ],
//   },
//   // Add more static data objects as needed
// ];
const TabContent = ({
  data,
  staticData,
  loading,
  startIndex,
  endIndex,
  cartClass,
  backImage,
}) => {
  // const context = useContext(CartContext);
  // const wishListContext = useContext(WishlistContext);
  // const compareContext = useContext(CompareContext);
  // const curContext = useContext(CurrencyContext);
  // const currency = curContext.state;
  // const quantity = context.quantity;
  // console.log(data?.products);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Row className="slider">
      <Slider {...settings}>
        {loading ? (
          <Spin />
        ) : (
          data?.map((product, i) => {
            console.log("product", product);
            return (
              <ProductItem
                key={product._id}
                product={product}
                title={product.schoolName}
                // Additional props...
                // cartClass={cartClass}
                // backImage={backImage}
              />
            );
          })
        )}
        {/* {!data ||
      !data.products ||
      !data.products.items ||
      data.products.items.length === 0 ||
      loading ? (
        data &&
        data.products &&
        data.products.items &&
        data.products.items.length === 0 ? (
          <Col xs="12">
            <div>
              <div className="col-sm-12 empty-cart-cls text-center">
                <Media
                  src={emptySearch}
                  className="img-fluid mb-4 mx-auto"
                  alt=""
                />
                <h3>
                  <strong>Your Cart is Empty</strong>
                </h3>
                <h4>Explore more shortlist some items.</h4>
              </div>
            </div>
          </Col>
        ) : (
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
        )
      ) : (
        data &&
        data.products.items
          .slice(startIndex, endIndex)
          .map((product, i) => (
            <ProductItem
              key={i}
              product={product}
              symbol={currency.symbol}
              addCompare={() => compareContext.addToCompare(product)}
              addCart={() => context.addToCart(product, quantity)}
              addWishlist={() => wishListContext.addToWish(product)}
              cartClass={cartClass}
              backImage={backImage}
            />
          ))
      )} */}
      </Slider>
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 45 }}>
        <a className="btn btn-classic btn-outline">view All</a>
      </div>
    </Row>
  );
};

const SpecialProducts = ({
  type,
  fluid,

  designClass,
  cartClass,
  heading,
  noTitle,
  title,
  inner,
  line,
  hrClass,
  backImage,
}) => {
  const [activeTab, setActiveTab] = useState("All");
  const context = useContext(CartContext);
  const wishListContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const quantity = context.quantity;

  const [schoolList, setSetSchoolList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSchoolData = async () => {
    try {
      // console.log("Received values of form: ", values);
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8088/api/school/list?schoolType=${activeTab}`
      );
      if (response) {
        setSetSchoolList(response?.data.result);
        message.success(response?.data.message);
        setLoading(false);

        console.log("submitData", response?.data.result);
      }
    } catch (error) {
      setLoading(false);

      console.log("Error", error);
      message.error(error.code);
    }
  };

  useEffect(() => {
    getSchoolData();
  }, []);

  // var { loading, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: activeTab,
  //     indexFrom: 0,
  //     limit: 8,
  //   },
  // });

  return (
    <div className="featuredschools">
      <section className={designClass}>
        <Container fluid={fluid}>
          {noTitle ? (
            ""
          ) : (
            <div className={title}>
              <h2 className={inner}>Featured Schools In Lahore</h2>
              {/* <h4>Brings you the best of school and everthing about it</h4> */}
              {line ? (
                <div className="line"></div>
              ) : hrClass ? (
                <hr role="tournament6"></hr>
              ) : (
                ""
              )}
            </div>
          )}

          <Tabs className="theme-tab">
            <TabList className="tabs tab-title">
              <Tab
                className={activeTab == type ? "active" : ""}
                onClick={() => setActiveTab(type)}
              >
                All
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                Traditional{" "}
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                Boarding
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                Islamic
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                Cadet
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                Convent
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                Charity
              </Tab>
            </TabList>

            <TabPanel>
              <TabContent
                data={schoolList} // Pass static data array
                loading={false} // Set loading to false
                startIndex={0}
                endIndex={schoolList?.length} // Use the length of the static data array
                cartClass={cartClass}
                backImage={backImage}
                // data={data}
                // loading={loading}
                // startIndex={0}
                // endIndex={8}
                // cartClass={cartClass}
                // backImage={backImage}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={schoolList} // Pass static data array
                loading={false} // Set loading to false
                startIndex={0}
                endIndex={schoolList?.length} // Use the length of the static data array
                cartClass={cartClass}
                backImage={backImage}
                // data={data}
                // loading={loading}
                // startIndex={0}
                // endIndex={8}
                // cartClass={cartClass}
                // backImage={backImage}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={schoolList} // Pass static data array
                loading={false} // Set loading to false
                startIndex={0}
                endIndex={schoolList?.length} // Use the length of the static data array
                cartClass={cartClass}
                backImage={backImage}
                // data={data}
                // loading={loading}
                // startIndex={0}
                // endIndex={8}
                // cartClass={cartClass}
                // backImage={backImage}
              />
            </TabPanel>
          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default SpecialProducts;
