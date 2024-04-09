import React, { useState } from "react";
import CardMaker from "./CardMaker";
import { Button, Drawer, Form, Space, Spin, message } from "antd";
import BasicSchoolInformation from "./basicschoolinformation";
import axios from "axios";
import { useRouter } from "next/router";

const Stepschools = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onFinish = async (values) => {
    console.log("values", values);

    try {
      setLoading(true);
      const config = {
        "Content-Type": "application/json",
      };
      const submitData = await axios.post(
        // "http://localhost:5000/school/basicschoolinformation",
        "http://localhost:8088/api/school/create",
        values,
        config
      );
      if (submitData) {
        message.success("Data has been posted to MongoDB...");
        router.push("/page/account/login");
        setLoading(false);
        setOpen(false);
      }
    } catch (error) {
      message.error(`${error.response.data.message}`);
      console.log("Error", error.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <div onClick={showDrawer} className="btn btn-header">
        + Add School
      </div>

      <Drawer
        title="Basic School Information"
        height={650}
        onClose={onClose}
        placement="top"
        open={open}
        styles={{
          body: {
            paddingBottom: 20,
          },
        }}
      >
        {/* <CardMaker /> */}
        {loading ? (
          <Spin
            size="large"
            style={{
              height: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <Form layout="vertical" onFinish={onFinish} scrollToFirstError>
            <BasicSchoolInformation />
          </Form>
        )}
      </Drawer>
    </>
  );
};

export default Stepschools;
