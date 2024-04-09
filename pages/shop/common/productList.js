import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import Menu2 from "../../../public/assets/images/mega-menu/banner-listing.jpg";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import FilterContext from "../../../helpers/filter/FilterContext";
import ProductItem from "../../../components/common/product-box/ProductBox12";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useRouter } from "next/router";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { Spin, message } from "antd";
import axios from "axios";

// const GET_PRODUCTS = gql`
//   query products(
//     $type: _CategoryType!
//     $indexFrom: Int!
//     $limit: Int!
//     $color: String!
//     $brand: [String!]!
//     $sortBy: _SortBy!
//     $priceMax: Int!
//     $priceMin: Int!
//   ) {
//     products(
//       type: $type
//       indexFrom: $indexFrom
//       limit: $limit
//       color: $color
//       brand: $brand
//       sortBy: $sortBy
//       priceMax: $priceMax
//       priceMin: $priceMin
//     ) {
//       total
//       hasMore
//       items {
//         id
//         title
//         description
//         type
//         brand
//         category
//         price
//         new
//         sale
//         stock
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

// const staticProductData = {
//   total: 20,
//   hasMore: true,
//   items: [
//     {
//       id: 1,
//       title: "Lahore Public High School",
//       address: "342/B2, Wapda Town Lahore",
//       description: "Description of Product 1",
//       type: "Type 1",
//       brand: "Brand 1",
//       category: "Category 1",
//       price: 100,
//       new: true,
//       sale: false,
//       stock: 10,
//       discount: 0,
//       variants: [
//         {
//           id: 101,
//           sku: "SKU-101",
//           size: "Small",
//           color: "Red",
//           image_id: 1001,
//         },
//         // Add more variants if needed
//       ],
//       images: [
//         {
//           image_id: 1001,
//           id: 1,
//           alt: "Product Image 1",
//           src: img1,
//         },
//         // Add more images if needed
//       ],
//     },
//     {
//       id: 2,
//       title: "City Public High School",
//       address: "342/B2, Wapda Town Lahore",
//       description: "Description of Product 2",
//       type: "Type 2",
//       brand: "Brand 2",
//       category: "Category 2",
//       price: 150,
//       new: false,
//       sale: true,
//       stock: 5,
//       discount: 10,
//       variants: [
//         {
//           id: 201,
//           sku: "SKU-201",
//           size: "Medium",
//           color: "Blue",
//           image_id: 2001,
//         },
//         // Add more variants if needed
//       ],
//       images: [
//         {
//           image_id: 2001,
//           id: 2,
//           alt: "Product Image 2",
//           src: img2,
//         },
//         // Add more images if needed
//       ],
//     },
//     {
//       id: 3,
//       title: "Parasway Model High School",
//       address: "342/B2, Wapda Town Lahore",
//       description: "Description of Product 2",
//       type: "Type 2",
//       brand: "Brand 2",
//       category: "Category 2",
//       price: 150,
//       new: false,
//       sale: true,
//       stock: 5,
//       discount: 10,
//       variants: [
//         {
//           id: 202,
//           sku: "SKU-201",
//           size: "Medium",
//           color: "Blue",
//           image_id: 2002,
//         },
//         // Add more variants if needed
//       ],
//       images: [
//         {
//           image_id: 2002,
//           id: 3,
//           alt: "Product Image 2",
//           src: img3,
//         },
//         // Add more images if needed
//       ],
//     },
//     {
//       id: 4,
//       title: "TCF Public High School",
//       address: "342/B2, Wapda Town Lahore",
//       description: "Description of Product 2",
//       type: "Type 2",
//       brand: "Brand 2",
//       category: "Category 2",
//       price: 150,
//       new: false,
//       sale: true,
//       stock: 5,
//       discount: 10,
//       variants: [
//         {
//           id: 204,
//           sku: "SKU-201",
//           size: "Medium",
//           color: "Blue",
//           image_id: 2004,
//         },
//         // Add more variants if needed
//       ],
//       images: [
//         {
//           image_id: 2004,
//           id: 4,
//           alt: "Product Image 3",
//           src: img4,
//         },
//         // Add more images if needed
//       ],
//     },
//     // Add more products as needed
//   ],
// };

const ProductList = ({ colClass, layoutList, openSidebar, noSidebar }) => {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const router = useRouter();
  const [limit, setLimit] = useState(8);
  const curContext = useContext(CurrencyContext);
  const [grid, setGrid] = useState(colClass);
  const symbol = curContext.state.symbol;
  const filterContext = useContext(FilterContext);
  const selectedBrands = filterContext.selectedBrands;
  const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice;
  const selectedCategory = filterContext.state;
  const selectedSize = filterContext.selectedSize;
  const [sortBy, setSortBy] = useState("AscOrder");
  const [isLoading, setIsLoading] = useState(false);
  const [layout, setLayout] = useState(layoutList);
  const [url, setUrl] = useState();
  const [schoolList, setSetSchoolList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSchoolData = async () => {
    try {
      console.log("Received values of fschoolList: ", schoolList);
      setLoading(true);
      const response = await axios.get("http://localhost:8088/api/school/list");
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
    const pathname = window.location.pathname;
    setUrl(pathname);
    router.push(
      `${pathname}?${filterContext.state}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`,
      undefined,
      { shallow: true }
    );
  }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);

  const removeBrand = (val) => {
    const temp = [...selectedBrands];
    temp.splice(selectedBrands.indexOf(val), 1);
    filterContext.setSelectedBrands(temp);
  };

  const removeSize = (val) => {
    const temp = [...selectedSize];
    temp.splice(selectedSize.indexOf(val), 1);
    filterContext.setSelectedSize(temp);
  };

  const removeColor = () => {
    filterContext.setSelectedColor("");
  };

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            <div className="top-banner-wrapper">
              <a href={null}>
                <Media
                  src={Menu2.src}
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </a>
              <div className="top-banner-content small-section">
                <h4>All Schools</h4>
                {/* <h5>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5> */}
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p> */}
              </div>
            </div>
            <Row>
              <Col xs="12">
                <ul className="product-filter-tags">
                  {selectedBrands.map((brand, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {brand}
                        <i
                          className="fa fa-close"
                          onClick={() => removeBrand(brand)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {selectedColor ? (
                    <li>
                      <a href={null} className="filter_tag">
                        {selectedColor}
                        <i className="fa fa-close" onClick={removeColor}></i>
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {selectedSize.map((size, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {size}
                        <i
                          className="fa fa-close"
                          onClick={() => removeSize(size)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {
                    // <li>
                    //   <a href={null} className="filter_tag">
                    //     price: {selectedPrice.min}- {selectedPrice.max}
                    //   </a>
                    // </li>
                    <li>
                      <a
                        style={{ backgroundColor: "#27BFFF", color: "white" }}
                        href={null}
                        className="filter_tag"
                      >
                        All Schools
                      </a>
                    </li>
                  }
                  <li>
                    <a
                      href={null}
                      className="filter_tag"
                      style={{ backgroundColor: "#90C643", color: "white" }}
                    >
                      Play Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href={null}
                      className="filter_tag"
                      style={{ backgroundColor: "#BB86FC", color: "white" }}
                    >
                      Boarding Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href={null}
                      className="filter_tag"
                      style={{ backgroundColor: "#27BFFF", color: "white" }}
                    >
                      Day Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href={null}
                      className="filter_tag"
                      style={{ backgroundColor: "#E74C3C", color: "white" }}
                    >
                      Day Boarding Schools
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="collection-product-wrapper">
              <div className="product-top-filter">
                {!noSidebar ? (
                  <Row>
                    <Col xl="12">
                      <div
                        className="filter-main-btn"
                        onClick={() => openSidebar()}
                      >
                        <span className="filter-btn btn btn-theme">
                          <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                          Filter
                        </span>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
                <Row>
                  <Col>
                    <div className="product-filter-content">
                      <div className="search-count">
                        {/* <h5>
                          {data
                            ? `Showing Products 1-${data.products.items.length} of ${data.products.total}`
                            : "loading"}{" "}
                          Result
                        </h5> */}
                        <h5>{`Showing Products 1-${schoolList?.length} of ${schoolList?.length} Result`}</h5>
                      </div>
                      <div className="collection-view">
                        <ul>
                          <li>
                            <i
                              className="fa fa-th grid-layout-view"
                              onClick={() => {
                                setLayout("");
                                setGrid("col-lg-3");
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              className="fa fa-list-ul list-layout-view"
                              onClick={() => {
                                setLayout("list-view");
                                setGrid("col-lg-12");
                              }}
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="collection-grid-view"
                        style={
                          layout === "list-view"
                            ? { visibility: "hidden" }
                            : { visibility: "visible" }
                        }
                      >
                        <ul>
                          <li>
                            <Media
                              src={`/assets/images/icon/2.png`}
                              alt=""
                              className="product-2-layout-view"
                              onClick={() => setGrid("col-lg-6")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/3.png`}
                              alt=""
                              className="product-3-layout-view"
                              onClick={() => setGrid("col-lg-2")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/4.png`}
                              alt=""
                              className="product-4-layout-view"
                              onClick={() => setGrid("col-lg-2")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/6.png`}
                              alt=""
                              className="product-6-layout-view"
                              onClick={() => setGrid("col-lg-1")}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="product-page-per-view">
                        <select
                          onChange={(e) => setLimit(parseInt(e.target.value))}
                        >
                          <option value="10">10 Products Per Page</option>
                          <option value="15">15 Products Per Page</option>
                          <option value="20">20 Products Per Page</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select onChange={(e) => setSortBy(e.target.value)}>
                          <option value="AscOrder">Sorting items</option>
                          <option value="HighToLow">High To Low</option>
                          <option value="LowToHigh">Low To High</option>
                          <option value="Newest">Newest</option>
                          <option value="AscOrder">Asc Order</option>
                          <option value="DescOrder">Desc Order</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {loading ? (
                    <Spin />
                  ) : (
                    schoolList?.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              symbol={symbol}
                              cartClass="cart-info cart-wrap"
                              addCompare={() =>
                                compareContext.addToCompare(product)
                              }
                              addWishlist={() =>
                                wishlistContext.addToWish(product)
                              }
                              addCart={() =>
                                cartContext.addToCart(product, quantity)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </Row>
              </div>

              <Button className="load-more" onClick={() => handlePagination()}>
                {isLoading && <Spinner animation="border" variant="light" />}
                Load More
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProductList;
