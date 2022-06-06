import Sidebar from "./Sidebar";
import Header from "./Header";
import {useContext, useState} from "react";
import {DarkModeContext} from "../context/DarkModeContext";

const Layout = ({children}) => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "layout dark" : "layout"}>
            <Sidebar />

            <div className={"layout__content-container"}>
                <Header />

                <main>{children}</main>
            </div>

        </div>
    );
};

export default Layout;