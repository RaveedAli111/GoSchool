import React, { useEffect, useState } from "react";
import { Form, Select, Button, message } from "antd";
import StepPanel from "./StepPanel";
import dayjs from "dayjs";

import { useRouter } from "next/router";

import BasicSchoolInformation from "./basicschoolinformation";
import AdvanceSchoolinformation from "./advanceschoolinformation";
import AdvanceSchoolProvidingFacilities from "./advanceschoolprovidingfacilities";
// import CommonLayout from "../../components/shop/common-layout";
import axios from "axios";
// let index = 0;
const CardMaker = ({}) => {
  // const router = useRouter();
  const [stepForm] = Form.useForm();
  // const { Option } = Select;
  const cardTitleValue = Form.useWatch("cardTitle", stepForm);
  // const dateFormat = "MM/DD/YYYY";

  // const [value, setValue] = useState();
  const [selectedCard, setSelectedCard] = useState();

  const steps = [
    {
      step: 1,
      title: "Basic School Information",
      content: <BasicSchoolInformation />,
      icon: (
        <i className="fa fa-id-badge fa-2x" style={{ color: "#43D7BA" }}></i>
      ),
    },
    {
      step: 2,
      title: "Advance School Information",
      content: <AdvanceSchoolinformation />,
      icon: (
        <i className="fa fa-user-plus fa-2x" style={{ color: "#43D7BA" }}></i>
      ),
    },
    {
      step: 3,
      title: "Advance School Providing Facilities",
      content: <AdvanceSchoolProvidingFacilities />,
      icon: (
        <i className="fa fa-user-plus fa-2x" style={{ color: "#43D7BA" }}></i>
      ),
    },
  ];
  const [loading, setLoading] = useState(false);
  // const onFinish = async (values) => {
  //   setLoading(true);

  //   values.createdBy = user?._id;
  //   values.social = values.social?.some((user) => Object.keys(user).length > 0)
  //     ? values.social
  //     : [];
  //   values.collegeDetail = values.collegeDetail?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.collegeDetail
  //     : [];
  //   values.projects = values.projects?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.projects
  //     : [];
  //   values.achievements = values.achievements?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.achievements
  //     : [];
  //   values.mobile = values.mobile?.some((user) => Object.keys(user).length > 0)
  //     ? values.mobile
  //     : [];
  //   values.videoLink = values.videoLink?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.videoLink
  //     : [];
  //   values.certification = values.certification?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.certification
  //     : [];
  //   values.certificationLink = values.certificationLink?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.certificationLink
  //     : [];
  //   try {
  //     const res = await jwtAxios.post("card/create", values);
  //     notification.success({
  //       message: "Success",
  //       description: res.data.message,
  //     });
  //     setCards([...cards, res.data.result]);
  //     setLoading(false);
  //     handleClose();
  //   } catch (error) {
  //     setLoading(false);

  //     return notification.error({
  //       message: "Error",
  //       description: error.response.data.message,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   stepForm.setFieldsValue(
  //     selectedCard
  //       ? {
  //           officeHourStart: officeHourStart ? dayjs(officeHourStart) : null,
  //           officeHourEnd: officeHourEnd ? dayjs(officeHourEnd) : null,
  //           availabilityStart: availabilityStart
  //             ? dayjs(availabilityStart)
  //             : null,
  //           availabilityEnd: availabilityEnd ? dayjs(availabilityEnd) : null,
  //           dob: dob ? dayjs(dob, "YYYY-MM-DD") : null,
  //           projects:
  //             projects?.length > 0
  //               ? projects.map((d) => ({
  //                   label: d.label ? dayjs(d.label, dateFormat) : null,
  //                   detail: d.detail,
  //                   title: d.title,
  //                 }))
  //               : [{}],
  //           collegeDetail:
  //             collegeDetail?.length > 0
  //               ? collegeDetail.map((d) => ({
  //                   collegeName: d.collegeName,
  //                   collegeAddress: d.collegeAddress,
  //                   collegeEmail: d.collegeEmail,
  //                   degreeLevel: d.degreeLevel,
  //                   degreeEnd: d.degreeEnd ? dayjs(d.degreeEnd) : null,
  //                   degreeStart: d.degreeStart ? dayjs(d.degreeStart) : null,
  //                 }))
  //               : [{}],
  //           achievements:
  //             achievements?.length > 0
  //               ? achievements.map((d) => ({
  //                   label: d.label ? dayjs(d.label, dateFormat) : null,
  //                   detail: d.detail,
  //                   title: d.title,
  //                 }))
  //               : [{}],
  //           certification:
  //             certification?.length > 0
  //               ? certification.map((d) => ({
  //                   label: d.label ? dayjs(d.label, dateFormat) : null,
  //                   detail: d.detail,
  //                   title: d.title,
  //                 }))
  //               : [{}],
  //           mobile:
  //             mobile?.length > 0
  //               ? mobile?.map((d) => ({
  //                   label: d.label,
  //                   number: d.number,
  //                   phoneCode: d.phoneCode,
  //                 }))
  //               : [{}],

  //           social:
  //             social?.length > 0
  //               ? social?.map((d) => ({
  //                   title: d.title,
  //                   label: d.label,
  //                 }))
  //               : [{}],

  //           videoLink:
  //             videoLink?.length > 0
  //               ? videoLink?.map((d) => ({
  //                   link: d.link,
  //                   title: d.title,
  //                 }))
  //               : [{}],

  //           certificationLink:
  //             certificationLink?.length > 0
  //               ? certificationLink?.map((d) => ({
  //                   title: d.title,
  //                 }))
  //               : [{}],
  //           // primaryAddress: primaryAddress ? primaryAddress : data?.address,
  //           ...others,
  //         }
  //       : {
  //           firstName: data?.name,
  //           primaryAddress: data?.address,
  //           primaryEmail: data?.email,
  //           dob: data?.dob ? dayjs(data?.dob, "YYYY-MM-DD") : null,
  //           country: data?.country,
  //           mobile: [{ number: data?.number }],
  //         }
  //   );
  // }, [selectedCard]);
  const onFinishFailed = (errorInfo) => {
    errorInfo.errorFields.map((p) => message.error(p.errors[0]));
  };
  // const onUpdate = async (values) => {
  //   setLoading(true);
  //   values.createdBy = user?._id;
  //   values.social = values.social?.some((user) => Object.keys(user).length > 0)
  //     ? values.social
  //     : [];
  //   values.collegeDetail = values.collegeDetail?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.collegeDetail
  //     : [];
  //   values.projects = values.projects?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.projects
  //     : [];
  //   values.achievements = values.achievements?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.achievements
  //     : [];
  //   values.mobile = values.mobile?.some((user) => Object.keys(user).length > 0)
  //     ? values.mobile
  //     : [];
  //   values.videoLink = values.videoLink?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.videoLink
  //     : [];
  //   values.certification = values.certification?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.certification
  //     : [];
  //   values.certificationLink = values.certificationLink?.some(
  //     (user) => Object.keys(user).length > 0
  //   )
  //     ? values.certificationLink
  //     : [];

  //   try {
  //     const response = await jwtAxios.put(
  //       `card/update/${selectedCard?._id}`,
  //       values
  //     );

  //     setCards((prevData) => {
  //       const updateData = prevData.map((item) => {
  //         if (item._id == selectedCard._id) {
  //           return response.data.result;
  //         }
  //         return item;
  //       });
  //       return updateData;
  //     });
  //     notification.success({
  //       message: "Success",
  //       description: response.data.message,
  //     });
  //     setSelectedCard(response.data.result);
  //     setLoading(false);
  //     handleClose();
  //   } catch (error) {
  //     notification.error({
  //       message: "Error",
  //       description: error.response.data.message,
  //     });
  //     setLoading(false);
  //   }
  // };
  const onValidate = async () => {
    stepForm
      .validateFields()
      .then(async (values) => {
        console.log("values", values);
        try {
          const config = {
            "Content-Type": "application/json",
          };
          const submitData = await axios.post(
            "http://localhost:5000/school/basicschoolinformation",
            values,
            config
          );
          if (submitData) {
            message.success("Data has been posted to MongoDB...");
          }
        } catch (error) {
          console.log("Error", error);

          message.error(`${error.code}`);
        }
        // if (selectedCard) {
        //   onUpdate(values);
        // } else {
        //   onFinish(values);
        // }
      })
      .catch((info) => {
        info.errorFields?.map((p) => message.info(p.errors[0]));
      });
  };
  return (
    // <CommonLayout
    //   parent="home"
    //   title="Admission Form"
    //   subTitle="admission detail"
    // >

    <div
      style={{
        marginTop: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "70%",
        }}
      >
        <div className="inputs-step">
          <Form
            form={stepForm}
            onFinishFailed={onFinishFailed}
            onFinish={onValidate}
            layout="vertical"
            scrollToFirstError
          >
            <StepPanel
              status={cardTitleValue}
              steps={steps}
              selectedCard={selectedCard}
              loading={loading}
            />
          </Form>
        </div>
      </div>
    </div>

    // {/* </CommonLayout> */}
  );
};

export default CardMaker;
