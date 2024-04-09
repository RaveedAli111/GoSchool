import React, { useState } from "react";
import { Button, Space, Steps } from "antd";
import { LeftOutlined, RightOutlined, SaveFilled } from "@ant-design/icons";

const StepPanel = (props) => {
  let id = null;
  const [activeStep, setActiveStep] = useState(0);
  const next = () => {
    setActiveStep(activeStep + 1);
  };

  const prev = () => {
    setActiveStep(activeStep - 1);
  };

  const items = props.steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps current={activeStep} items={items} />
      {props.steps.map((item) => (
        <div
          className={`steps-content ${
            item.step !== activeStep + 1 && "hidden"
          }`}
        >
          {item.content}
        </div>
      ))}

      <div className="steps-action">
        <Space>
          {activeStep < props.steps.length - 0 && (
            <Button
              type="primary"
              htmlType="submit"
              loading={props.loading}
              icon={<SaveFilled />}
            >
              Submit
            </Button>
          )}
          {activeStep < props.steps.length - 1 && (
            <Button
              // style={{ margin: "0 8px" }}
              hidden={!id}
              type="primary"
              onClick={() => next()}
              icon={<RightOutlined />}
            >
              Next
            </Button>
          )}
          {activeStep > 0 && (
            <Button onClick={() => prev()} icon={<LeftOutlined />}>
              Previous
            </Button>
          )}
        </Space>
      </div>
    </>
  );
};

export default StepPanel;
