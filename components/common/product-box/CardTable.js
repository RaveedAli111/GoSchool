import React from "react";

import { Table } from "reactstrap";
import dayjs from "dayjs";
const CardTable = ({ product }) => {
  return (
    <Table borderless>
      <tbody>
        {product?.gradeStart && product?.gradeEnd ? (
          <tr>
            <td className="t-constant ">Classes offered</td>
            <td>:</td>
            <td className="ms-4">
              {product?.gradeStart + "-" + product?.gradeEnd}
            </td>
          </tr>
        ) : (
          ""
        )}

        {product?.academicYearStart && product?.academicYearEnd ? (
          <tr>
            <td className="t-constant">Academic Year</td>
            <td>:</td>
            <td>
              {dayjs(product?.academicYearStart).format("MMM") +
                "-" +
                dayjs(product?.academicYearEnd).format("MMM")}
            </td>
          </tr>
        ) : (
          ""
        )}

        {product?.minimumFee && product?.maximumFee ? (
          <tr>
            <td className="t-constant">Prox Monthly Fee</td>
            <td>:</td>
            <td>{product?.minimumFee + " To " + product?.maximumFee}</td>
          </tr>
        ) : (
          ""
        )}

        {product?.board ? (
          <tr>
            <td className="t-constant">Board Affilation</td>
            <td>:</td>
            <td>{product?.board}</td>
          </tr>
        ) : (
          ""
        )}

        {/* student in class */}
        {/* <tr>
          <td className="t-constant">Student in class</td>
          <td>:</td>
          <td>20 - 25 Students</td>
        </tr> */}

        {product?.schoolType ? (
          <tr>
            <td className="t-constant">Gender</td>
            <td>:</td>
            <td>{product?.schoolType}</td>
          </tr>
        ) : (
          ""
        )}

        {product?.langInstructions ? (
          <tr>
            <td className="t-constant">Medium</td>
            <td>:</td>
            <td>{product?.langInstructions}</td>
          </tr>
        ) : (
          ""
        )}

        {product?.admissionProcess ? (
          <tr>
            <td className="t-constant">Admission Process</td>
            <td>:</td>
            <td>{product?.admissionProcess ? "Ongoing" : "Closed"}</td>
          </tr>
        ) : (
          ""
        )}
      </tbody>
    </Table>
  );
};

export default CardTable;
