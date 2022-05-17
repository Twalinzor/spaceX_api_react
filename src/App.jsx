import { RocketDetails } from "./components/RocketDetails";
import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";
import { Routes, Route } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import React from "react";

import logo from "./assets/logo-spacex.png";

export function App() {
  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route exact path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}
