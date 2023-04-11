import { logo } from "./banner.module.css";
import { PropsWithChildren } from 'react';

const subtitleStyle = {
    fontStyle: "italic", 
    fontSize: "x-large",
    color: "coral",
};

type BannerProps = { 
    headerText: string
}

const Banner = ({ children } : PropsWithChildren<{}>) => {
    return (
        <header className="row mb-4">
            <div className="col-5 ">
                <img src="./GloboLogo.png" alt="Logo" className={logo} />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {children}
            </div>
        </header>
    );
};

export default Banner;