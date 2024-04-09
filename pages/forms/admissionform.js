import React from "react";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  message,
} from "antd";
import axios from "axios";
import CommonLayout from "../../components/shop/common-layout";

const AdmissionApplicationForm = ({ form }) => {
  const [form] = Form.useForm();
  // const onFinish = async (values) => {
  //   try {
  //     console.log("Received values of form: ", values);
  //     const config = {
  //       "Content-Type": "application/json",
  //     };
  //     const submitData = await axios.post(
  //       "http://localhost:5000/school/admission",
  //       values,
  //       config
  //     );
  //     if (submitData) {
  //       // alert("Data has been posted to MongoDB...");
  //       setTimeout(() => {
  //         message.success("Data has been posted to MongoDB...");
  //       }, 1500);
  //       console.log("submitData", submitData);
  //     }
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };
  const prefixSelector = (name) => {
    return (
      <Form.Item name={name} noStyle>
        <Select style={{ width: 70 }}>
          <Select.Option value="92">+92</Select.Option>
          <Select.Option value="30">+30</Select.Option>
          <Select.Option value="91">+91</Select.Option>
          <Select.Option value="87">+87</Select.Option>
          <Select.Option value="86">+86</Select.Option>
        </Select>
      </Form.Item>
    );
  };

  return (
    <CommonLayout
      parent="Home"
      // title="Admission Form"
      subTitle="Admission Form"
    >
      <Row justify="center">
        {/* Title */}
        <Col style={{ color: "blueviolet", marginTop: "10px" }} gutter={12}>
          <p>(A Field Marked in* Compulsary)</p>
        </Col>
        <Col span={24}>
          <h3
            style={{
              backgroundColor: "blueviolet",
              color: "white",
            }}
          >
            Admission Application Form
          </h3>
        </Col>
        <Row gutter={12}>
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="firstName"
              label="Child Name"
              type="string"
              rules={[
                {
                  required: true,
                  message: "Child Name Required!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="childFamily"
              label="Child Family"
              rules={[
                {
                  required: true,
                  message: "Child Family Required!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="dOb"
              label="Date Of Birth"
              rules={[
                {
                  required: true,
                  message: "D.O.B is Required!",
                },
              ]}
            >
              <DatePicker format="YYYY/MM/DD" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          {/* </Row>
        <Row gutter={24}> */}
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Gender is  Required!",
                },
              ]}
            >
              <Select placeholder="Select your Gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="feMale">Female</Select.Option>
                <Select.Option value="Not">Rather Not Say</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="religion"
              label="Religion"
              rules={[
                {
                  required: true,
                  message: "Religion is compulsary!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="nationality"
              label="Nationality"
              rules={[
                {
                  required: true,
                  message: "Nationality is required",
                },
              ]}
            >
              <Select>
                <Select.Option value="Pak">Pakistani</Select.Option>
                <Select.Option value="Japnies">Japnies</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="seekingForAdmission"
              label="Class for Seeking Admission"
              rules={[
                {
                  required: true,
                  message: "Seeking for admission is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="previousSchool"
              label="Previous School (If Any)"
              rules={[
                {
                  required: true,
                  message: "Previous school is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} xs={23} sm={18}>
            <Form.Item
              name="fatherName"
              label="Father/GuardianName"
              rules={[
                {
                  required: true,
                  message: "Guardian name is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} xs={23} sm={18}>
            <Form.Item name="fatherOccupation" label="FatherOccupation">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={8} xs={23} sm={9}>
            <Form.Item
              name="phoneNumber"
              label="Ph No"
              rules={[
                {
                  required: true,
                  message: "Phone number is required",
                },
              ]}
            >
              <Input addonBefore={prefixSelector("phCode")} />
            </Form.Item>
          </Col>
          <Col md={8} xs={23} sm={9}>
            <Form.Item name="whatsapp" label="Whatsapp">
              <Input addonBefore={prefixSelector("whastappCode")} />
            </Form.Item>
          </Col>
          <Col md={8} xs={23} sm={9}>
            <Form.Item name="contactNo" label="Contact">
              <Input addonBefore={prefixSelector("contactCode")} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} xs={23} sm={9}>
            <Form.Item
              name="email"
              label="Email Address"
              type="Email"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} xs={23} sm={9}>
            <Form.Item
              name="contactTiming"
              label="Contact Timing"
              rules={[
                {
                  required: true,
                  message: "Please select Timing!",
                },
              ]}
            >
              <Select placeholder="select your Timing">
                <Select.Option value="morning">Morning</Select.Option>
                <Select.Option value="afternoon">Afternoon</Select.Option>
                <Select.Option value="night">Night</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          style={{ margin: "20px 0px 30px 0px" }}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox>
            I accept the <a href="">Terms & Conditions</a> and Privacy Policy of
            dashschool{" "}
          </Checkbox>
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" htmlType="submit" size="large">
            Register
          </Button>
        </Form.Item>
      </Row>
    </CommonLayout>
  );
};
export default AdmissionApplicationForm;
