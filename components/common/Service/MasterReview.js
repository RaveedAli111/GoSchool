import React from "react";
// import two from "../../public/assets/images/2.jpg";
// import avtar from "../../public/assets/images/avtar.jpg";
// import twenty from "../../public/assets/images/20.jpg";
import { Container, Row, Col, Media } from "reactstrap";
import Slider from "react-slick";
import { Slider3 } from "../../../services/script";

const ReviewContent = [
  {
    img: "/assets/images/avtar.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2023 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo.",
    likes: "14",
    dislikes: "2",
    color: "#90C643",
  },
  {
    img: "/assets/images/2.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2023 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo.",
    likes: "14",
    dislikes: "2",
    color: "#F1C40F",
  },
  {
    img: "/assets/images/20.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2023 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo.",
    likes: "14",
    dislikes: "2",
    color: "#E74C3C",
  },
  {
    img: "/assets/images/avtar.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2023 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo.",
    likes: "14",
    dislikes: "2",
    color: "#27BFFF",
  },
  {
    img: "/assets/images/2.jpg",
    name: "Mark Jecno",
    datetime: "12 Jannuary 2023 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo.",
    likes: "14",
    dislikes: "2",
    color: "#91278F",
  },
];

const MasterReview = ({
  img,
  name,
  datetime,
  review,
  likes,
  dislikes,
  color,
}) => {
  let RatingStars = [];
  let rating = 5;
  for (var i = 0; i < rating; i++) {
    RatingStars.push(<i className="fa fa-star" key={i}></i>);
  }
  return (
    <li style={{ borderColor: color }}>
      <div className="media">
        <Media src={img} alt="Generic placeholder image" />
        <div className="media-body">
          <h6>
            {name} <span>({datetime})</span>
          </h6>

          <div className="rating">{RatingStars}</div>

          <p>{review}</p>
          <ul className="comnt-sec">
            <li>
              <a href="#">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <span>({likes})</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="unlike">
                  <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                  <span>({dislikes})</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

const ReviewSection = () => {
  return (
    <Container style={{ marginBottom: "100px" }}>
      <section
        // className="service small-section pb-0"
        className="section-b-space blog-detail-page review-page"
      >
        <Row
        // className="partition4"
        >
          <div className="blogslider">
            <Slider
              {...Slider3}
              className="slide-3 no-arrow slick-default-margin blogwidth"
            >
              {ReviewContent.map((review, i) => {
                return (
                  <Col
                    // lg="3"
                    // xs="6"
                    // className="service-block1"
                    // style={{ borderColor: review.color }}
                    // key={i}
                    sm="4"
                  >
                    <ul
                      className="comment-section"
                      style={{ borderColor: review.color }}
                    >
                      <MasterReview
                        key={i}
                        img={review.img}
                        name={review.name}
                        datetime={review.datetime}
                        review={review.review}
                        likes={review.likes}
                        dislikes={review.dislikes}
                        color={review.color}
                      />
                    </ul>
                  </Col>
                );
              })}
            </Slider>
          </div>
        </Row>
      </section>
    </Container>
  );
};
export default ReviewSection;
