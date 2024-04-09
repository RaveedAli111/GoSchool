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
        class_name: "PlayGroup",
    },
    {
        id: 2,
        class_name: "Nursery",
    },
    {
        id: 3,
        class_name: "Prep",
    },
    {
        id: 4,
        class_name: "Class 1",
    },
    {
        id: 5,
        class_name: "Class 2",
    },
    {
        id: 6,
        class_name: "Class 3",
    },
]
const Class = () => {
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
                Class
            </h3>
            <Collapse isOpen={isOpen}>
                <div className="collection-collapse-block-content">
                    <div className="collection-brand-filter">
                        {
                            // !data || !data.getBrands || data.getBrands.length === 0 || loading
                            //   ? "loading"
                            //   : data &&
                            //     data.getBrands.brand.map((brand, index) => 
                            StaticData.map((Class, index) => (
                                <div
                                    className="form-check custom-checkbox collection-filter-checkbox"
                                    key={index}
                                >
                                    <Input
                                        checked={context.selectedBrands.includes(Class.class_name)}
                                        onChange={() => {
                                            context.handleBrands(Class.class_name, isChecked);
                                        }}
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={Class.id}
                                    />
                                    <label className="custom-control-label" htmlFor={Class.class_name}>
                                        {Class.class_name}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default Class;
