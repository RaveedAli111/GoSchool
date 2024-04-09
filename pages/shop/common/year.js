import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { Collapse, Input } from "reactstrap";
import FilterContext from "../../../helpers/filter/FilterContext";

// const GET_BRAND = gql`
//   query getBrands($type: String) {
//     getBrands(type: $type) {
//       brand
//     }
//   }
// `;

const StaticData = [
    {
        id: 1,
        year_start: "jan",
        year_end: "nov"
    },
    {
        id: 2,
        year_start: "March",
        year_end: "Feb"
    },
    {
        id: 3,
        year_start: "Sep",
        year_end: "Oct"
    },

]
const Year = () => {
    const context = useContext(FilterContext);
    const isChecked = context.isChecked;
    const filterChecked = context.filterChecked;
    const [isOpen, setIsOpen] = useState(false);
    const toggleBrand = () => setIsOpen(!isOpen);

    // var { loading, data } = useQuery(GET_BRAND, {
    //   variables: {
    //     type: context.state,
    //   },
    // });

    return (
        <div className="collection-collapse-block open">
            <h3 className="collapse-block-title" onClick={toggleBrand}>
                Academic Year
            </h3>
            <Collapse isOpen={isOpen}>
                <div className="collection-collapse-block-content">
                    <div className="collection-brand-filter">
                        {
                            // !data || !data.getBrands || data.getBrands.length === 0 || loading
                            //   ? "loading"
                            //   : data &&
                            //     data.getBrands.brand.map((brand, index) => 
                            StaticData.map((Year, index) => (
                                <div
                                    className="form-check custom-checkbox collection-filter-checkbox"
                                    key={index}
                                >
                                    <Input
                                        checked={context.selectedBrands.includes(Year.year_start)}
                                        onChange={() => {
                                            context.handleBrands(Year.year_start, isChecked);
                                        }}
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={Year.id}
                                    />
                                    <label className="custom-control-label"
                                    htmlFor={Year.year_start}
                                    >
                                        {Year.year_start}-{Year.year_end}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default Year;
