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
        city_name: "Lahore",
    },
    {
        id: 2,
        city_name: "Karachi",
    },
    {
        id: 3,
        city_name: "Multan",
    },
    {
        id: 4,
        city_name: "Peshawar",
    },
    {
        id: 5,
        city_name: "Islamabad",
    },
    {
        id: 6,
        city_name: "Rawalpindi",
    },
]
const City = () => {
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
                City
            </h3>
            <Collapse isOpen={isOpen}>
                <div className="collection-collapse-block-content">
                    <div className="collection-brand-filter">
                        {
                            // !data || !data.getBrands || data.getBrands.length === 0 || loading
                            //   ? "loading"
                            //   : data &&
                            //     data.getBrands.brand.map((brand, index) => 
                            StaticData.map((City, index) => (
                                <div
                                    className="form-check custom-checkbox collection-filter-checkbox"
                                    key={index}
                                >
                                    <Input
                                        checked={context.selectedBrands.includes(City.city_name)}
                                        onChange={() => {
                                            context.handleBrands(City.city_name, isChecked);
                                        }}
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={City.id}
                                    />
                                    <label className="custom-control-label" htmlFor={City.city_name}>
                                        {City.city_name}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default City;
