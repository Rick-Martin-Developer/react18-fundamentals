import { useEffect, useState } from "react";
import { LoadingStatus } from "@/helpers/loadingStatus";
import type { House } from "@/shared/types/house";

type useHouses = {
    houses: House[],
    setHouses: (houseList : House[]) => void,
    loadingState: string 
}

const useHouses = (): useHouses => { 

    const [houses, _setHouses] = useState<House[]>([]);
    const [loadingState, setLoadingState] = useState(LoadingStatus.ISLOADING);

    const setHouses = (houseList : House[]) => { 
        _setHouses(houseList);
    }

    useEffect(() => {
        
        const fetchHouses = async () => {
            
            setLoadingState(LoadingStatus.ISLOADING);
            
            try { 

                const response = await fetch("/api/houses");
                const houses : House[] = await response.json();
                _setHouses(houses);
                setLoadingState(LoadingStatus.LOADED);
            } catch {
                setLoadingState(LoadingStatus.HASERRORED);
            }
        };
    
        fetchHouses();
    }, []);

    return { houses, setHouses, loadingState };
};

export default useHouses;