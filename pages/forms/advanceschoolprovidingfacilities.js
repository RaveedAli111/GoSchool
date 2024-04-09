import React from "react";
import { Checkbox, Col, Form, Radio, Row } from "antd";

const AdvanceSchoolProvidingFacilities = ({ form }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      {/* Heading */}
      <Row>
        {/* <Col span={18} offset={3}>
          <p style={{ marginTop: "10px" }}>(A Field Marked in* Compulsary)</p>

          <h3
            style={{
              display: "block",
              backgroundColor: "blueviolet",
              color: "white",
              margin: "0px",
              padding: "0px",
            }}
          >
            Advance School information
          </h3>
        </Col> */}
        <Col span={17} offset={3}>
          <h3
            style={{
              margin: "15px 0px 20px 0px",
              textDecoration: "underline",
            }}
          >
            Details of Providing Facillities
          </h3>
        </Col>
        {/* First Row starts from here */}
        {/* First Col */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Classrooms
          </h3>
          <Form.Item
            label="AC Classrooms"
            name="acClassroom"
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Multimedia Classrooms"
            name="multimediaClassroom"
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Wifi Classrooms"
            name="wifiClassroom"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/*Second Col  */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Labs
          </h3>
          <Form.Item
            label="Computer Lab"
            name="computerLab"
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Science Lab"
            name="scienceLab"
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Robotics Lab"
            name="roboticsLab"
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/* Second Row starts from here */}
        {/* First Col */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Advanced Facillities
          </h3>
          <Form.Item
            label="Day Care"
            name="dayCare"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Medical Room"
            name="medicalRoom"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Transportation"
            name="transportation"
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Alumni Association"
            name="alumniAssociation"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>{" "}
          <Form.Item
            label="Backup Genrators/Solar Panels"
            name="backupGenrators"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/*Second Col  */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Extra Curricular Activities
          </h3>
          <Form.Item
            label="Art and Craft"
            name="artAndCraft"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Dance"
            name="dance"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Debate"
            name="debate"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Drama"
            name="drama"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Music"
            name="music"
            //
            style={{ marginBottom: "0px" }}
          >
            <div style={{ marginBottom: "0px" }}>
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </div>
          </Form.Item>
          <Form.Item
            label="Picnicks and Excursion"
            name="picnicksAndExcursion"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/* Third Row starts from here */}
        {/* First Col */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Sports and Fitness
          </h3>
          <Form.Item
            label="Horse Riding"
            name="horseRiding"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Skating"
            name="skating"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Indoor Sports"
            name="indoorSports"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>{" "}
          <Form.Item
            label="Outdoor Sports"
            name="outdoorSports"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>{" "}
          <Form.Item
            label="Swimming Pool"
            name="swimmingPool"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Karate"
            name="karate"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Yoga"
            name="yoga"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/*Second Col  */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Infrastructure
          </h3>
          <Form.Item
            label="Purpose-Built Building"
            name="purposeBuiltBuilding"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Library/Reading Room"
            name="library"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Auditorium/Media Room"
            name="auditorium"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Cafeteria/Canteen"
            name="cafeteria"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Waiting Room/Activity Room"
            name="waitingRoom"
            //
            style={{ marginBottom: "0px" }}
          >
            <div style={{ marginBottom: "0px" }}>
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </div>
          </Form.Item>
          <Form.Item
            label="Playground"
            name="playground"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/* Forth Row starts from here */}
        {/* First Col */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Safety and Security
          </h3>
          <Form.Item
            label="CCTV Cameras"
            name="cameras"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="GPS Bus Tracking App"
            name="gpsBusTrackingApp"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Student Tracking App"
            name="studentTrackingApp"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/*Second Col  */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Disabled Friendly
          </h3>
          <Form.Item
            label="Ramps"
            name="ramps"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Elevator"
            name="elevator"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Washrooms"
            name="washrooms"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/* Fifth Row starts from here */}
        {/* First Col */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            International Languages
          </h3>
          <Form.Item
            label="Araibic"
            name="araibic"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="German"
            name="german"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Spanish"
            name="spanish"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Chinese"
            name="chinese"
            //
            //   style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>

        {/*Second Col  */}
        <Col span={8} offset={3}>
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "0px",
              color: "#3636a3",
            }}
          >
            Boarding
          </h3>
          <Form.Item
            label="Boys Hostel"
            name="boysHostel"
            //   //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Girls Hostel"
            name="girlsHostel"
            //
            style={{ marginBottom: "0px" }}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      {/* Footer starts from here */}
      <Row>
        <Col span={24} offset={3}>
          <Form.Item
            name="termsAndCondition"
            valuePropName="checked"
            style={{ margin: "20px 0px 30px 0px" }}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(" Terms and Condition should be checked")
                      ),
              },
            ]}
          >
            <Checkbox>
              I accepts the Terms and Condition and Privacy Policy of dashschool
            </Checkbox>
          </Form.Item>
        </Col>
        {/* <Col span={2} offset={11}>
            <Form.Item value={"large"}>
              <Button
                type="primary"
                htmlType="submit"
                block
                // style={{ backgroundColor: "#52c41a" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Col> */}
      </Row>
    </div>
  );
};

export default AdvanceSchoolProvidingFacilities;
