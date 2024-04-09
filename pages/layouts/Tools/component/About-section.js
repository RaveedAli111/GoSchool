import React,{Fragment} from 'react';
import { Row, Col ,Container} from "reactstrap";

const AboutSection = () => {
    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" className="m-auto">
                            <div className="title3">
                                <h2 className="title-inner3">What are you looking for?</h2>
                                <div className="about-text">
                                <p>
                                    Brings you the best of school and everthing about it
                                </p>
                            </div>
                                <div className="line"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default AboutSection;