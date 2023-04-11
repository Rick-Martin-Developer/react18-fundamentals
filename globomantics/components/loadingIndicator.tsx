import React from "react";

type Props = { 
    loadingState : string
}

const LoadingIndicator = ({ loadingState } : Props) => {
    return (
        <h3>{ loadingState }</h3>
    );
};

export default LoadingIndicator;