import React, { useCallback, useState } from "react";

import Banner from "./banner";
import ComponentPicker from "./componentPicker";

import { navValues } from "@/helpers/navValues";

import type { House } from "@/shared/types/house";

const navigationContext = React.createContext<TNavigate>({ current: navValues.HOME });

type TNavigate = {
    current: navValues,
    navigate?: TCallback | undefined,
    param?: House | undefined
}

type TCallback = (navTo : navValues, param: any) => void; 

const App = () => {

    const navigate : TCallback = useCallback<TCallback>(
        (navTo : navValues, param: any) => setNav({ 
            current: navTo,
            param,
            navigate 
        }),
        []
    );

    const [nav, setNav] = useState<TNavigate>({ current: navValues.HOME, navigate});

    return (
        <navigationContext.Provider value={nav}>
            <Banner>Providing houses all over the world</Banner>
            <ComponentPicker currentNavLocation={nav.current} />
        </navigationContext.Provider>
    );
};

export { navigationContext };
export default App;