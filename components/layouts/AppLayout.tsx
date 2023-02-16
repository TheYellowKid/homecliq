import React from "react";
import Navbar from "../navigation/navbar";
import Footer from "../footer/Footer";


interface LayoutProps {
    children : any;
}

const AppLayout = ({children}: LayoutProps) => {
    return(
        <div className="flex flex-col w-screen font-quicksand">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout