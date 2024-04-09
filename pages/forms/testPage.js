import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import Link from "next/link";

const testPage = () => {
  return (
    <CommonLayout parent="home" title="select any" subTitle="">
      <div
        style={{
          width: "100%",
          margin: "50px auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link href="/forms/admissionform" className="btn btn-success">
          + Admission Form
        </Link>
        <Link href="/forms/basicschoolinformation" className="btn btn-warning">
          +Add Basic Information
        </Link>
        <Link href="/forms/advanceschoolinformation" className="btn btn-danger">
          + Add Advance Information
        </Link>
        <Link
          href="/forms/advanceschoolprovidingfacilities"
          className="btn btn-info"
        >
          + Add Advance Information
        </Link>
      </div>
    </CommonLayout>
  );
};
export default testPage;
