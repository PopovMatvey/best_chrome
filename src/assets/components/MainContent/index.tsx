import React from "react";
import "./css/MainContent.css";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../../pages/AboutUs";
import { Contacts } from "../../pages/Contacts";
import { Learning } from "../../pages/Learning";
import { Services } from "../../pages/Services";
import { Shop } from "../../pages/Shop";
import { Technologies } from "../../pages/Technologies";
import { OurWorks } from "../../pages/OurWorks";
import { CrashTests } from "../../pages/CrashTests";

// Основной контент
export function MainContent() {

    return (
        <>
            <div className="main-content">
                <Routes>
                    <Route path={"/"} element={<AboutUs/>}></Route>
                    <Route path={"/servises"} element={<Services/>}></Route>
                    <Route path={"/shop"} element={<Shop/>}></Route>
                    <Route path={"/learning"} element={<Learning/>}></Route>
                    <Route path={"/technologies"} element={<Technologies/>}></Route>
                    <Route path={"/ourWorks"} element={<OurWorks/>}></Route>
                    <Route path={"/crashTests"} element={<CrashTests/>}></Route>
                    <Route path={"/contacts"} element={<Contacts/>}></Route>
                </Routes>
            </div>
        </>
    )
}