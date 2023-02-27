import React from "react";

const Container = ({ children }) => {
    return <div className={`container-fluid text-center`}>{children}</div>;
};

export default Container;
