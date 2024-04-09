import React from "react";
import { Table, Avatar } from "antd";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import { EditOutlined } from "@ant-design/icons";

const table = () => {
  const columns = [
    {
      title: "Actions",
      dataIndex: "col1",
      key: "col1",
      render: (text, record) => {
        <DeleteOutlined src={record.avatar} />;
      },
    },
    { title: "Column 2", dataIndex: "col2", key: "col2" },
    { title: "Column 3", dataIndex: "col3", key: "col3" },
    { title: "Column 4", dataIndex: "col4", key: "col4" },
    { title: "Column 5", dataIndex: "col5", key: "col5" },
    { title: "Column 6", dataIndex: "col6", key: "col6" },
    { title: "Column 7", dataIndex: "col7", key: "col7" },
  ];

  const data = [
    {
      key: "1",
      col1: { avatar: "https://example.com/avatar2.jpg" },
      col2: "Row 1",
      col3: "Row 1",
      col4: "Row 1",
      col5: "Row 1",
      col6: "Row 1",
      col7: "Row 1",
    },
    {
      key: "2",
      col1: { avatar: "https://example.com/avatar2.jpg" },
      col2: "Row 2",
      col3: "Row 2",
      col4: "Row 2",
      col5: "Row 2",
      col6: "Row 2",
      col7: "Row 2",
    },
    {
      key: "3",
      col1: { avatar: "https://example.com/avatar3.jpg" },
      col2: "Row 3",
      col3: "Row 3",
      col4: "Row 3",
      col5: "Row 3",
      col6: "Row 3",
      col7: "Row 3",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default table;
