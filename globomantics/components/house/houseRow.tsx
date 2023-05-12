import React, { useContext } from "react"; 
import currencyFormatter from "@/helpers/currencyFormatter";

import { navigationContext } from "../app";

import type { House } from "@/shared/types/house";
import { navValues } from "@/helpers/navValues";

export type Props = {
    house: House
}

const HouseRow = ({house} :Props) => {

    const { navigate } = useContext(navigationContext); 

    return (
        <tr onClick={() => navigate(navValues.HOUSE, house)}>
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