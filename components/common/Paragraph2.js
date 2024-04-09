import React from "react";
import { Container, Row, Col } from "reactstrap";

const Paragraph2 = ({ title, inner, line, hrClass }) => {
  return (
    <>
      <div className={title}>
        {/* <h4>special offer</h4> */}
        <h2 className={inner}>Tools to advance your search</h2>
        {line ? (
          <div className="line"></div>
        ) : hrClass ? (
          <hr role="tournament6"></hr>
        ) : (
          ""
        )}
      </div>
      <Container>
        <Row>
          <Col lg="6" className="m-auto">
            <div className="product-para">
              <p className="text-center">
                Make a right desicion with chosing a school for your child
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Paragraph2;
