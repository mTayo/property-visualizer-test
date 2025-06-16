
import React from "react";
import {  Outlet } from "react-router-dom";

const HomeLayout = () => {

    return(
        <>
        <div className="antialiased relative">
            <main className="">
                <div className="p-4">
                    <Outlet />
                </div>
            </main>
        </div>
        
            
        </>
    )
};

export default HomeLayout;