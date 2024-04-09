import React, { Fragment } from "react";
import Slider from "react-slick";
import { Slider4 } from "../../../../services/script";
import { Media, Container, Col, Row } from "reactstrap";
import category1 from "../../../../public/assets/images/tools/category/1.jpg";
import category2 from "../../../../public/assets/images/tools/category/school.png";
import category3 from "../../../../public/assets/images/tools/category/school1.png";
import category4 from "../../../../public/assets/images/tools/category/school-bag.png";
import category5 from "../../../../public/assets/images/tools/category/5.jpg";
import AboutSection from "./About-section";
const Data = [
  // {
  //   img: category1,
  //   title: "auto parts",
  //   features: [
  //     { title: "d1 milano", link: "#" },
  //     { title: "damaskeening", link: "#" },
  //     { title: "diving watch", link: "#" },
  //     { title: "dollar watch", link: "#" },
  //   ],
  //   link: "#",
  // },
  {
    img: category2,
    title: "Traditional Schools",
    features: [
      { title: "shock-resistant watch", link: "#" },
      { title: "skeleton watch", link: "#" },
      { title: "slow watch", link: "#" },
      { title: "solar-powered watch", link: "#" },
    ],
    link: "#",
    color: "#F49021"
  },
  {
    img: category3,
    title: "Boarding Schools",
    features: [
      { title: "watchmaking conglomarates", link: "#" },
      { title: "breitling SA", link: "#" },
      { title: "casio watch", link: "#" },
      { title: "citizen watch", link: "#" },
    ],
    link: "#",
    color: "#012D9C"
  },
  {
    img: category4,
    title: "Cadet Schools",
    features: [
      { title: "Manufacture D'horlogerie", link: "#" },
      { title: "mechanical watche", link: "#" },
      { title: "microbrand watches", link: "#" },
      { title: "MIL-W-46374", link: "#" },
    ],
    link: "#",
    color: "#07BC0C"
  },
  // {
  //   img: category5,
  //   title: "other parts",
  //   features: [
  //     { title: "d1 milano", link: "#" },
  //     { title: "damaskeening", link: "#" },
  //     { title: "diving watch", link: "#" },
  //     { title: "dollar watch", link: "#" },
  //   ],
  //   link: "#",
  // },
];

const MasterCategory = ({ img, title, color, features, link, }) => {

  return (
    <div>
      <div className="category-wrapper pt-0" style={{borderColor:color}}>
        <div style={{ padding: 25 }}>
          <div style={{ height: 60, width: 60, }}>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h4 style={{ textAlign: "left" }}>{title}</h4>
          {/* <ul className="category-link">
            {features.map((data, i) => {
              return (
                <li key={i}>
                  <a href={data.link}>{data.title}</a>
                </li>
              );
            })}
          </ul>
          <a href={link} className="btn btn-classic btn-outline">
            view more
          </a> */}
        </div>
      </div>
    </div>

  );
};

const Category = () => {
  return (
    <Fragment>
      <section className="pt-0 category-tools ratio3_2">
        <Container>
        <AboutSection/>
          <Row>
            <Col>
              <Slider {...Slider4} className="slide-4 category-m no-arrow">
                {/* <div>
                  <div className="category-wrapper pt-0">
                    <div>
                      <div>
                        <Media
                          src={category1}
                          className="img-fluid blur-up lazyload bg-img"
                          alt=""
                        />
                      </div>
                      <h4>auto parts</h4>
                      <ul className="category-link">
                        <li>
                          <a href="#">d1 milano</a>
                        </li>
                        <li>
                          <a href="#">damaskeening</a>
                        </li>
                        <li>
                          <a href="#">diving watch</a>
                        </li>
                        <li>
                          <a href="#">dollar watch</a>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-classic btn-outline">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="category-wrapper pt-0">
                    <div>
                      <div>
                        <Media
                          src={category2}
                          className="img-fluid blur-up lazyload bg-img"
                          alt=""
                        />
                      </div>
                      <h4>brakes & steering</h4>
                      <ul className="category-link">
                        <li>
                          <a href="#">Shock-resistant watch</a>
                        </li>
                        <li>
                          <a href="#">Skeleton watch</a>
                        </li>
                        <li>
                          <a href="#">Slow watch</a>
                        </li>
                        <li>
                          <a href="#">Solar-powered watch</a>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-outline btn-classic">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="category-wrapper pt-0">
                  <div>
                    <div>
                      <Media
                        src={category3}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
                    </div>
                    <h4>engine & drivetrain</h4>
                    <ul className="category-link">
                      <li>
                        <a href="#">Watchmaking conglomerates</a>
                      </li>
                      <li>
                        <a href="#">Breitling SA</a>
                      </li>
                      <li>
                        <a href="#">Casio watches</a>
                      </li>
                      <li>
                        <a href="#">Citizen Watch</a>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-outline btn-classic">
                      view more
                    </a>
                  </div>
                </div>
                <div className="category-wrapper pt-0">
                  <div>
                    <div>
                      <Media
                        src={category4}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
                    </div>
                    <h4>exterior accesories</h4>
                    <ul className="category-link">
                      <li>
                        <a href="#">Manufacture d'horlogerie</a>
                      </li>
                      <li>
                        <a href="#">Mechanical watch</a>
                      </li>
                      <li>
                        <a href="#">Microbrand watches</a>
                      </li>
                      <li>
                        <a href="#">MIL-W-46374</a>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-outline btn-classic">
                      view more
                    </a>
                  </div>
                </div>
                <div className="category-wrapper pt-0">
                  <div>
                    <div>
                      <Media
                        src={category5}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
                    </div>
                    <h4>other parts</h4>
                    <ul className="category-link">
                      <li>
                        <a href="#">d1 milano</a>
                      </li>
                      <li>
                        <a href="#">damaskeening</a>
                      </li>
                      <li>
                        <a href="#">diving watch</a>
                      </li>
                      <li>
                        <a href="#">dollar watch</a>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-outline btn-classic">
                      view more
                    </a>
                  </div>
                </div> */}
                {Data.map((data, i) => {
                  return (
                    <MasterCategory
                      key={i}
                      img={data.img.src}
                      link={data.link}
                      title={data.title}
                      features={data.features}
                      color={data.color}
                    />
                  );
                })}
              </Slider>
              <div style={{textAlign:"center", marginTop: 20, marginBottom: 45,}}>
                <a className="btn btn-classic btn-outline">
                view All
              </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;
