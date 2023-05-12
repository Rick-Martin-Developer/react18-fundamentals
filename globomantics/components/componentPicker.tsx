import React from "react";

import { navValues } from "@/helpers/navValues";
import HouseDetail from "@/components/house/houseDetail";
import HouseList from "@/components/house/houseList";

const ComponentPicker = ({ currentNavLocation }) => {

    switch (currentNavLocation) {

        case navValues.HOME:

            return <HouseList />;
            
        case navValues.HOUSE:
            
            return <HouseDetail />;

        default:

            return (
                <h3>
                    No component for navigation value 
                    {currentNavLocation} found;
                </h3>
            )
    }
};

export default ComponentPicker;