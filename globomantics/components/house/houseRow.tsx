import React from "react"; 
import currencyFormatter from "@/helpers/currencyFormatter";

import type { House } from "@/shared/types/house"; 

export type Props = {
    house: House,
    selectHouse: (house : House) => void 
}

const HouseRow = ({house, selectHouse} :Props) => {
    return (
        <tr onClick={() => selectHouse(house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && (
                <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                    {currencyFormatter.format(house.price)}
                </td>
            )}
        </tr> 
    );
};

export default HouseRow;