import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client";
import { Slider3 } from "../../../services/script";
import { Media, Container, Row, Col } from "reactstrap";

const img1 = "/assets/images/schools/1.jpg";
const img2 = "/assets/images/schools/2.jpg";
const img3 = "/assets/images/schools/3.jpg";
const img4 = "/assets/images/schools/4.jpg";



// const GET_PRODUCTS = gql`
//   query blog($type: String!) {
//     blog(type: $type) {
//       img
//       link
//       title
//       desc
//       date
//     }
//   }
// `;
const staticBlogData = [
  {
    img: img1,
    link: '#',
    title: 'How Kids Make Sense Of Life Experiences',
    desc: 'Search for schools around you, and access important insights along with application dates.',
    date: '2023-10-25',
  },
  {
    img: img2,
    link: '#',
    title: 'How Kids Make Sense Of Life Experiences',
    desc: 'Search for schools around you, and access important insights along with application dates.',
    date: '2023-10-26',
  },
  {
    img: img3,
    link: '#',
    title: 'How Kids Make Sense Of Life Experiences',
    desc: 'Search for schools around you, and access important insights along with application dates.',
    date: '2023-10-26',
  },
  {
    img: img4,
    link: '#',
    title: 'How Kids Make Sense Of Life Experiences',
    desc: 'Search for schools around you, and access important insights along with application dates.',
    date: '2023-10-26',
  },
  // Add more static data entries as needed
];

const BlogSection = ({ type, sectionClass, title, inner, hrClass }) => {
  // var { data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: type,
  //   },
  // });
  return (
    <Fragment>
      <section className={sectionClass}>
        <Container >
          <Row>
            <Col md="12">
              <div className={title}>
                <h4>Our Blog Post</h4>
                <h2 className={inner}>Our Most Popular Blog Post</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <div className="blogslider">
              <Slider {...Slider3} className="slide-3 no-arrow slick-default-margin blogwidth">
              {staticBlogData.map((item, index) => (
                    <div className="bg-slider-item">
                    <Col md="12" key={index}>
                      <Link href={item.link}>
                        <div className="classic-effect blog-img">
                          <Media src={item.img} className="img-fluid img-style" alt="" />
                          <span></span>
                        </div>
                      </Link>
                      <div className="blog-details">
                        <h4>{item.title}</h4>
                        <Link href={`/blogs/blog_detail`}>
                          <p>{item.desc} </p>
                        </Link>
                        {/* <hr className="style1" /> */}
                        <h6 style={{marginTop:"13px"}}>by: {item.date}</h6>
                      </div>
                    </Col>
                    </div>
                  ))}
                {/* {data &&
                  data.blog.map((item, index) => (
                    <Col md="12" key={index}>
                      <Link href={`/blogs/blog_detail`}>
                        <div className="classic-effect">
                          <Media src={item.img} className="img-fluid" alt="" />
                          <span></span>
                        </div>
                      </Link>
                      <div className="blog-details">
                        <h4>{item.title}</h4>
                        <Link href={`/blogs/blog_detail`}>
                          <p>{item.desc} </p>
                        </Link>
                        <hr className="style1" />
                        <h6>by: {item.date}</h6>
                      </div>
                    </Col>
                  ))} */}
              </Slider>
              </div>
            </Col>
            <div style={{textAlign:"center", marginTop: 20, marginBottom: 45,}}>
                <a className="btn btn-classic btn-outline">
                More Article
              </a>
              </div>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default BlogSection;
