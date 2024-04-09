import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgFastEfficient,
  svgFreeShipping,
  svgpayment,
  svgservice,
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: "fa fa-search",
    title: "Explore and Search",
    service: "Search for schools around you and access important insights along with application dates",
    btn: "search now",
    color: "#FF4D3B"
  },
  {
    link: "fa fa-random",
    //link: svgpayment,
    title: "Compare Schools",
    service: "Select and compare on various parameters to choose the best for your child",
    btn: "compare now",
    color: "#3498DB"
  },
  {
    // link: svgservice,
    link: "fa fa-puzzle-piece",
    title: "How goshool works",
    service: "Search for schools around you and access important insights along with application dates",
    btn: "explore now",
    color: "#07BC0C"
  },
  {
    // link: svgFastEfficient,
    link: "fa fa-tasks",
    title: "fast & efficient",
    service: "Search for schools around you and access important insights along with application dates",
    btn: "search now",
    color: "#BB86FC"
  },
];

const Service = () => {
  return (
    <Container style={{marginBottom:"100px"}}>
      <section className="service small-section pb-0">
        <Row className="partition4">
          {Data.map((data, index) => {
            return (
              <Col
                lg="3"
                xs="6"
                className={`service-block1`}
                style={{borderColor: data.color}}
                key={index}
              >
                <MasterServiceContent
                  title={data.title}
                  link={data.link}
                  service={data.service}
                  btn={data.btn}
                  marijuana={true}
                  color={data.color}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};
export default Service;