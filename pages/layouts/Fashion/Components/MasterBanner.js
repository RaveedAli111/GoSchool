import { Input } from "antd";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import SelectSearch from "../../../../helpers/Reuseable/SelectSearch";
import CitySelect from "../../../../helpers/Reuseable/CitySelect";

const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass }) => {
  
  return (
    <div>
      <div className={`home ${img} ${classes ? classes : "text-center"}`}>
        <div
          style={{
            padding: "11% 0% 0% 0%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(233, 233, 232, 0.7)",
              backdropFilter: "blur(7px)",
              border: "0px solid black",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              width: "800px",
            }}
          >
            <div>
              <Row>
                <Col xs={12}>
                  <div
                    className="form-group"
                    style={{
                      display: "flex",
                    }}
                  >
                    <CitySelect />
                    <SelectSearch
                      fields={"name,bankIdentifierCode,address"}
                      route={`accounts/Bank/dsearch`}
                    />
                    <button
                      type="submit"
                      className="btn btn-solid black-btn"
                      style={{
                        padding: "10px",
                        marginLeft: "1px",
                        border: "0px solid #ccc",
                        borderRadius: "0px 10px 10px 0px",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </Col>
              </Row>
              <Row style={{ paddingTop: "20px" }}>
                <Col>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{
                      textTransform: "none",
                      borderRadius: "10px",
                      width: "190px",
                      backgroundColor: "#16316E",
                    }}
                  >
                    Find School Near Me
                  </button>
                </Col>{" "}
                <Col>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{
                      textTransform: "none",
                      borderRadius: "10px",
                      width: "190px",
                      backgroundColor: "#16316E",
                    }}
                  >
                    Show All Schools
                  </button>
                </Col>
                <Col>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{
                      textTransform: "none",
                      borderRadius: "10px",
                      width: "190px",
                      backgroundColor: "#16316E",
                    }}
                  >
                    School Types
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MasterBanner;
