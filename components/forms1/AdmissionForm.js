import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  // message,
} from "antd";
// import { db } from "../../fireBase";

const { Option } = Select;
const residences = [];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const AdmissionForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    //   try {
    //     const { firstName, childFamily } = values;
    //     const docRef = await addDoc(collection(db, "Register"), {
    //       name: firstName,
    //       childFamily: childFamily,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="92">+92</Option>
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );
  // const suffixSelector = (
  //   <Form.Item name="suffix" noStyle>
  //     <Select
  //       style={{
  //         width: 70,
  //       }}
  //     >
  //       <Option value="USD">$</Option>
  //       <Option value="CNY">¥</Option>
  //     </Select>
  //   </Form.Item>
  // );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Row justify="center">
      <Form
        {...formItemLayout}
        form={form}
        layout="vertical"
        name="register"
        onFinish={onFinish}
        // style={{
        //   maxWidth: 1000,
        // }}
        scrollToFirstError
      >
        {" "}
        {/* <Row style={{ color: "blueviolet" }} gutter={12} justify="center">
          <p>(A Field Marked in* Compulsary)</p>
        </Row> */}
        {/* <Col
          span={24}
          style={{
            marginTop: "0px",
            background: "blueviolet",
            color: "white",
            fontSize: "1.2rem",
            height: "30px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5>Admisdion Application Form 2</h5>
        </Col> */}
        <Row gutter={12}>
          <Col md={12}>
            <Form.Item
              name="firstName"
              label="Child-Name"
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
          <Col md={12}>
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
          <Col md={12}>
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
        </Row>
        <Row span={24}>
          <Col md={8}>
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
                <Option value="male">Male</Option>
                <Option value="feMale">Female</Option>
                <Option value="Not">Rather Not Say</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={8}>
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
          <Col md={8}>
            <Form.Item name="nationality" label="Nationality">
              <Select>
                <Option value="Pak">Pakistani</Option>
                <Option value="Japnies">Japnies</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="seekingForAdmisssion"
          label="Class For Seaking For Addmission"
          tooltip="What do you want others to call you?"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="previousSchool"
          label="Previous School I(f Any)"
          rules={[
            {
              required: "true",
              message: "Previous school is required",
            },
          ]}
          // tooltip="What do you want others to call you?"
        >
          <Input />
        </Form.Item>
        <Row gutter={24}>
          <Col md={12}>
            <Form.Item
              name="fatherName"
              label="Father/GuardianName"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: "true",
                  message: "required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              name="fatherOccupation"
              label="FatherOccupation"
              tooltip="What do you want others to call you?"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <p>Contact Detail</p>
        <Row gutter={24}>
          <Col md={8}>
            <Form.Item name="phoneNmber" label="PH No ">
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item name="whatsapp" label="whatsapp">
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item name="contactNo" label="Contact">
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12}>
            <Form.Item
              name="email"
              label="Email Adress"
              type="Email"
              rules={[
                {
                  required: "true",
                  message: " required",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12}>
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
                <Option value="morning">Morning</Option>
                <Option value="afternoon">Afternoon</Option>
                <Option value="night">Night</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input the captcha you got!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "green" }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};
export default AdmissionForm;
