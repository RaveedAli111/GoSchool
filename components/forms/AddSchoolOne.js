import React, { useState } from "react";
import {Modal} from "reactstrap";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Spin,
  TimePicker,
  Upload,
} from "antd";

import {
  UserOutlined,
  HomeFilled,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Login from "../../pages/page/account/login";

const { Option } = Select;

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
const AddSchoolOne = () => {
 const [isOrder , setOrder]=useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    setOrder(false)
  };
console.log("first")
  return (
    <>
      <Row justify="center">
        <Form
          layout="vertical"
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          
        
          <Row gutter={12}>
            <Col md={12} sm={12} xs={24}>
              <Form.Item
                name="schoolName"
                label="School Name"
                rules={[
                  {
                    type: "String",
                    required: true,
                    message: "School is required!",
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
            </Col>

            <Col md={12} sm={12} xs={24}>
              <Form.Item name="schoolType" label="SchoolType">
                <Input className="hello" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={6}>
            <Col md={6} sm={12} xs={24}>
              <Form.Item
                name="adress"
                label="Aderess"
                rules={[
                  {
                    type: "String",
                    required: true,
                    message: "Adress is required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Adress" prefix={<HomeFilled />} />
              </Form.Item>
            </Col>
            <Col md={6} sm={12} xs={24}>
              <Form.Item name="society" label=" " hasFeedback>
                <Input placeholder="Socity/Mohall" />
              </Form.Item>
            </Col>
            <Col md={6} sm={12} xs={24}>
              <Form.Item name="plotNo" label=" " hasFeedback>
                <Input placeholder="Plot Number" />
              </Form.Item>
            </Col>
            <Col md={6} sm={12} xs={24}>
              <Form.Item name="street" label=" " hasFeedback>
                <Input placeholder="Street/Road" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item
              name="city"
              label="City"
              rules={[
                {
                  type: "String",
                  required: true,
                  message: "City is required!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item name="button" label=" " hasFeedback>
              <Button
                style={{ background: "red" }}
                type="primary"
                // htmlType="Location"
              >
                Add location here
              </Button>
            </Form.Item>
          </Row>
          <label htmlFor="">GradeRange</label>
          <Row gutter={12}>
            <Col md={8} sm={12} xs={24}>
              <Form.Item
                name="grade"
                rules={[
                  {
                    type: "regexp",
                    required: true,
                    message: "Grade is required!",
                  },
                ]}
                hasFeedback
              >
                <Select placeholder="select your GradeRange">
                  <Option value="Play">Play Group</Option>
                  <Option value="Primary">Primary</Option>
                  <Option value="Matric">Matric</Option>
                  <Option value="other">Others</Option>
                </Select>
              </Form.Item>
            </Col>

            <div
              style={{
                width: "70px",
                height: "30px",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              To
            </div>
            <Col md={8} sm={12} xs={24}>
              <Form.Item
                name="grade2"
                rules={[
                  {
                    required: true,
                    message: "Grade is required!",
                  },
                ]}
                hasFeedback
              >
                <Select placeholder="select your GradeRange">
                  <Option value="play">Play Group</Option>
                  <Option value="primary">Primary</Option>
                  <Option value="Matric">Matric</Option>
                  <Option value="other">Others</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col md={8} sm={12} xs={24}>
              <Form.Item
                name="academic"
                label="Acadmeic Year"
                rules={[
                  {
                    type: "date",
                    required: true,
                    message: "required!",
                  },
                ]}
                hasFeedback
              >
                <DatePicker picker="month" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Form.Item
                name="academic1"
                label=" "
                rules={[
                  {
                    type: "date",
                    required: true,
                    message: "Last date is required!",
                  },
                ]}
                hasFeedback
              >
                <DatePicker picker="month" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Col md={4} sm={12} xs={24}>
            <Form.Item
              name="Board"
              label="Board Affliaction"
              rules={[
                {
                  required: true,
                  message: " required!",
                },
              ]}
              hasFeedback
            >
              <Select placeholder="Board">
                <Option value="Lah">Lahore</Option>
                <Option value="Mul">Multan</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Row gutter={12}>
            <Col md={12} sm={12} xs={24}>
              <Form.Item
                name="contact"
                label="Contact Person Name"
                rules={[
                  {
                    required: true,
                    message: "Contact is required!",
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <Form.Item
                name="Designation"
                label="Person Designation"
                hasFeedback
              >
                <Select placeholder="Board">
                  <Option value="Prin">Principle</Option>
                  <Option value="V.p">V.P</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col md={8} sm={8} xs={24}>
              <Form.Item
                name="contactPerson"
                label="Offical Contact Detail"
                rules={[
                  {
                    required: true,
                    message: "Offical No is required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Ph.No#1" />
              </Form.Item>
            </Col>
            <Col md={8} sm={8} xs={24}>
              <Form.Item name="contact2" label=" " hasFeedback>
                <Input placeholder="Contact No" />
              </Form.Item>
            </Col>
            <Col md={8} sm={8} xs={24}>
              <Form.Item name="contact3" label=" " hasFeedback>
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  placeholder="Whatsapp Contact"
                  prefix={<WhatsAppOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Col md={12} sm={12} xs={24}>
            <Form.Item name="email" label="Offical Email Id" hasFeedback>
              <Input
                prefix={<MailOutlined />}
                type="email"
                placeholder="E-mail"
              />
            </Form.Item>
          </Col>
          <Row gutter={12}>
            <Col md={4} sm={4} xs={12}>
              <Form.Item name="first" label="Timing" hasFeedback>
                <TimePicker picker={["hours", "miniutes"]} />
              </Form.Item>
            </Col>
            <Col md={4} sm={4} xs={12}>
              <Form.Item name="last" label=" " hasFeedback>
                <TimePicker picker={["hours", "miniutes"]} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="pic" label="Add Pic from Gallery" hasFeedback>
            <Row
              width="100%"
              justify="space-between"
              align="middle"
              gutter={24}
            >
              <Col md={4} sm={4} xs={12}>
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:5173/"}
                >
                  {" "}
                  Main Page
                </Upload.Dragger>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:5173/"}
                >
                  {" "}
                  Upload Image
                </Upload.Dragger>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:5173/"}
                >
                  {" "}
                  Upload Image
                </Upload.Dragger>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:5173/"}
                >
                  {" "}
                  Upload Image
                </Upload.Dragger>
              </Col>
              <Col md={4} sm={4} xs={12}>
                <Upload.Dragger
                  multiple
                  listType="picture"
                  action={"http://localhost:5173/"}
                >
                  {" "}
                  Upload Image
                </Upload.Dragger>
              </Col>
            </Row>
          </Form.Item>
          <Row justify="center" gutter={12}>
            <Col md={8}>
              <Form.Item
                name="userName"
                label="User Name"
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Username is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter userName"
                  prefix={<UserOutlined />}
                  type="username"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center" gutter={12}>
            <Col md={8}>
              <Form.Item
                name="Password"
                label="Passsword"
                type="password"
                rules={[
                  {
                    type: "regexp",
                    required: true,
                    message: "Enter A strong Password",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center" gutter={12}>
            <Col md={8}>
              <Form.Item
                name="confirmPassword"
                label="ConfirmPassword "
                rules={[
                  {
                    type: "regexp",
                    required: true,
                    message: "Same Password is required!",
                  },
                ]}
              >
                {<Input.Password />}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="checkBox" valuePropName="checked">
            <Checkbox>
              I accept the <a href="/">terms & Conditions Privacy Policies</a>{" "}
              of dashSchool.
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={
              ()=>{setOrder(true)}
              // console.log('first12')
            }>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Row>

    </>
  );
};
export default AddSchoolOne;
