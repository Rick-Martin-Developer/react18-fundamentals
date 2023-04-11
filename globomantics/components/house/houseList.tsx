import HouseRow from "./houseRow";
import HouseAdd from "./houseAdd";
import LoadingIndicator from "@/components/loadingIndicator";

import useHouses from "@/hooks/useHouses";

import type { House } from "@/shared/types/house"; 
import { LoadingStatus } from "@/helpers/loadingStatus";

type Props = { 
    selectHouse: (house : House) => void 
}

const HouseList = ({selectHouse} : Props) => { 

    const { houses, setHouses, loadingState}  = useHouses(); 

    if(loadingState !== LoadingStatus.LOADED) {
        return <LoadingIndicator loadingState={loadingState} />; 
    }

    const addHouse = (house: House) => {
        setHouses([
            ...houses,
            house
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                  Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                    </thead>
                <tbody>
                  { houses.map((h) => 
                    <HouseRow 
                        key={ h.id } 
                        house={ h }
                        selectHouse={ selectHouse } 
                    />)
                }
                </tbody>
            </table>
            <HouseAdd addHouseResult={addHouse} />
        </>
    ); 
};

export default HouseList;