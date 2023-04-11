import React from "react";
import type { House } from "@/shared/types/house"; 

type Props = { 
    addHouseResult: (house : House) => void  
}

const HouseAdd = ({addHouseResult} : Props) => {

    const addHouse = () => {

        const setHouse = async () => {
            
            const newHouse : House = {
                address: "32 Valley Way, New York",
                country: "USA",
                price: 10000000
            };

            const response = await fetch('/api/houses', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json' 
                },
                body: JSON.stringify(newHouse)
            });

            const houseData : House = await response.json();
            
            // Callback to pass added house record back to component
            addHouseResult(houseData);
        };        
        
        setHouse();
    };

    return (
        <button className="btn btn-primary" onClick={addHouse}>
            Add
        </button>
    );

};

export default HouseAdd;