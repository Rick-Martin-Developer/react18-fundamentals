import { useState } from "react";
import Banner from "./banner";
import HouseList from "@/components/house/houseList";
import HouseDetail from "@/components/house/houseDetail";

import type { House } from "@/shared/types/house"; 

const App = () => {

    const [selectedHouse, setSelectedHouse] = useState<House>();

    const setSelectedHouseWrapper = (house: House) => {
        setSelectedHouse(house);
    }

    return (
        <>
            <Banner>Providing houses all over the world</Banner>
            {selectedHouse ? 
                <HouseDetail house={ selectedHouse } /> 
                    : 
                <HouseList selectHouse={ setSelectedHouse }/>
            }
        </>
    );
};

export default App;