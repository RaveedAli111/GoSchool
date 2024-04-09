import React from "react";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  TimePicker,
  Upload,
} from "antd";
import {
  UserOutlined,
  HomeFilled,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
const { Option } = Select;

const BasicSchoolInformation = () => {
  return (
    <>
      <Row
        justify="center"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
        }}
      >
        {/* school name */}
        <Row gutter={12}>
          <Col md={12} sm={12} xs={24}>
            <Form.Item
              name="schoolName"
              label="School Name"
              rules={[
                {
                  required: true,
                  message: "School name is required!",
                },
                { whitespace: true, message: "School name connot be empty" },
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

        {/* address */}
        <Row gutter={6}>
          <Col md={6} sm={12} xs={24}>
            <Form.Item
              name="adress"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Address is required!",
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

        {/* location and city */}
        <Row gutter={24}>
          <Col md={6} sm={12} xs={24}>
            <Form.Item
              name="city"
              label="City"
              rules={[
                {
                  required: true,
                  message: "City is required!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={6} sm={12} xs={24}>
            <Form.Item name="button" label=" " hasFeedback>
              <Button
                style={{ background: "red" }}
                type="primary"
                htmlType="Location"
              >
                Add location here
              </Button>
            </Form.Item>
          </Col>
        </Row>

        {/* grade start */}
        <label htmlFor="">GradeRange</label>
        <Row gutter={12}>
          <Col md={11} sm={12} xs={24}>
            <Form.Item
              name="gradeStart"
              rules={[
                {
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
              width: "60px",
              height: "30px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            To
          </div>
          <Col md={11} sm={12} xs={24}>
            <Form.Item
              name="gradeEnd"
              rules={[
                {
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
                <Option value="Others">Others</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* academic year */}
        <Row gutter={12}>
          <Col md={8} sm={12} xs={24}>
            <Form.Item
              name="academicYearStart"
              label="Acadmeic Year"
              rules={[
                {
                  required: true,
                  message: "Start date is required!",
                },
                {
                  type: "date",
                },
              ]}
              hasFeedback
            >
              <DatePicker picker="month" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Form.Item
              name="academicYearEnd"
              label=" "
              rules={[
                {
                  required: true,
                  message: "Last date is required!",
                },
                {
                  type: "date",
                },
              ]}
              hasFeedback
            >
              <DatePicker picker="month" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        {/* Board Affliaction */}
        <Col md={8} sm={12} xs={24}>
          <Form.Item
            name="board"
            label="Board Affliaction"
            rules={[
              {
                required: true,
                message: "Board Affliaction is required!",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Board">
              <Option value="Lahore">Lahore</Option>
              <Option value="Multan">Multan</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
        </Col>

        {/* Contact Person Name */}
        <Row gutter={12}>
          <Col md={12} sm={12} xs={24}>
            <Form.Item
              name="contactPersonName"
              label="Contact Person Name"
              rules={[
                {
                  required: true,
                  message: "Person Name is required!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>

          {/*designation  */}
          <Col md={12} sm={12} xs={24}>
            <Form.Item
              name="designation"
              label="Person Designation"
              rules={[
                {
                  required: true,
                  message: "Person Designation is required!",
                },
              ]}
              hasFeedback
            >
              <Select placeholder="Board">
                <Option value="Principle">Principle</Option>
                <Option value="V.p">V.P</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* contact details */}
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
            <Form.Item name="phoneNumber" label=" " hasFeedback>
              <Input placeholder="Contact No" />
            </Form.Item>
          </Col>
          <Col md={8} sm={8} xs={24}>
            <Form.Item name="whatsapp" label=" " hasFeedback>
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                placeholder="Whatsapp Contact"
                prefix={<WhatsAppOutlined />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* email */}
        <Col md={8} sm={12} xs={24}>
          <Form.Item
            name="email"
            label="Offical Email Id"
            hasFeedback
            rules={[
              { required: true, message: "Email is required!" },
              {
                type: "email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              type="email"
              placeholder="Please your email"
            />
          </Form.Item>
        </Col>

        {/* time  */}
        <Row gutter={12}>
          <Col md={4} sm={4} xs={12}>
            <Form.Item name="startTime" label="Timing" hasFeedback>
              <TimePicker
                picker={["hours", "miniutes"]}
                placeholder="Start time"
              />
            </Form.Item>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <Form.Item name="endTime" label=" " hasFeedback>
              <TimePicker
                picker={["hours", "miniutes"]}
                placeholder="End time"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* pictres */}
        <Form.Item name="pictures" label="Add Pic from Gallery" hasFeedback>
          <Row align="middle" gutter={24}>
            <Col md={4} sm={4} xs={12}>
              <Upload.Dragger multiple listType="picture">
                Main Page
              </Upload.Dragger>
            </Col>
          </Row>
        </Form.Item>

        {/* userName */}
        <Row justify="center" gutter={12}>
          <Col md={8}>
            <Form.Item
              name="userName"
              label="User Name"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                },
                { whitespace: true, message: "Username connot be empty!" },
                {
                  type: "string",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter userName"
                prefix={<UserOutlined />}
                type="username"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* password */}
        <Row justify="center" gutter={12}>
          <Col md={8}>
            <Form.Item
              name="password"
              label="Password"
              dependencies={["confirmPassword"]}
              rules={[
                {
                  required: true,
                  message: "Please enter a Password",
                },
                {
                  whitespace: true,
                  message: "Password cannot contain white spaces",
                },
                {
                  min: 8,
                  message: "Password must be at least 8 characters",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const regex =
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/;

                    if (!value || regex.test(value)) {
                      // Check if the password is valid
                      const confirmPassword = getFieldValue("confirmPassword");
                      if (!confirmPassword || value === confirmPassword) {
                        return Promise.resolve();
                      }
                    }
                    return Promise.reject(
                      "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long"
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        {/* Confirm password */}

        <Row justify="center" gutter={12}>
          <Col md={8}>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please enter Confirm Password",
                },
                {
                  whitespace: true,
                  message: "Password cannot contain white spaces",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const password = getFieldValue("password");
                    if (!value || password === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Both passwords are not equal");
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        {/* checkBox */}
        <Form.Item
          name="checkBox"
          valuePropName="checked"
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
            I accept the <a href="/">terms & Conditions</a> Privacy Policies of
            dashSchool.
          </Checkbox>
        </Form.Item>

        {/* Button submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {/* </Form> */}
      </Row>
    </>
  );
};
export default BasicSchoolInformation;
