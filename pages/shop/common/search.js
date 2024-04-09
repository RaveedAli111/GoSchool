import React from "react";
import { InputGroup, Input, Button } from "reactstrap";


const SearchFilter = () => {

    return (
        <div>
            <h6>SEARCH BY KEYWORD</h6>
            <InputGroup >
                
                <Input/>
                <Button>
                    <li className="fa fa-search"></li>
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchFilter;