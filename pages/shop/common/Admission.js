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
        admission_status: "open"
    },
    {
        id: 2,
        admission_status: "Closed"
    },

]
const Admission = () => {
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
                Admission Process
            </h3>
            <Collapse isOpen={isOpen}>
                <div className="collection-collapse-block-content">
                    <div className="collection-brand-filter">
                        {
                            // !data || !data.getBrands || data.getBrands.length === 0 || loading
                            //   ? "loading"
                            //   : data &&
                            //     data.getBrands.brand.map((brand, index) => 
                            StaticData.map((Admission, index) => (
                                <div
                                    className="form-check custom-checkbox collection-filter-checkbox"
                                    key={index}
                                >
                                    <Input
                                        checked={context.selectedBrands.includes(Admission.admission_status)}
                                        onChange={() => {
                                            context.handleBrands(Admission.admission_status, isChecked);
                                        }}
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={Admission.id}
                                    />
                                    <label className="custom-control-label"
                                        htmlFor={Admission.admission_status}
                                    >
                                        {Admission.admission_status}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default Admission;
