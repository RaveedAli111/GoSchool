import React from 'react';
import { Col, Media } from 'reactstrap';
import sideBanner from '../../../public/assets/images/side-banner.png';
import NewProduct from './newProduct';
import Category from './category';
import Brand from './brand'
import Color from './color'
import Size from './size'
import Price from './price';
import SearchFilter from './search';
import City from './city';
import Class from './class'
import Year from './year';
import Admission from './Admission';
import Board from './board';
import Distance from './distance';

const FilterPage = ({ sm, sidebarView, closeSidebar }) => {
    return (
        <>
            <Col sm={sm} className="collection-filter" style={sidebarView ? { left: "0px" } : {}}>
                {/* <!-- side-bar colleps block stat --> */}
                <div className="collection-filter-block">
                    {/* <!-- brand filter start --> */}
                    <div className="collection-mobile-back" onClick={() => closeSidebar()}>
                        <span className="filter-back">
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                    </div>
                    <div>
                        <h3>Filters</h3>
                    </div>
                    <SearchFilter />
                    <City />
                    <Price />
                    <Class />
                    <Year />
                    <Admission />
                    <Board />
                    <Distance />
                    <Category />

                    <Brand />
                    <Color />
                    <Size />

                </div>
                {/* <!-- silde-bar colleps block end here -->*/}
                <NewProduct />
                {/* <!-- side-bar banner start here -->  */}
                <div className="collection-sidebar-banner">
                    <a href={null}><Media src={sideBanner.src} className="img-fluid blur-up lazyload" alt="" /></a>
                </div>
                {/* <!-- side-bar banner end here --> */}
            </Col>
        </>
    )
}

export default FilterPage;