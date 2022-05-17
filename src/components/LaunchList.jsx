import { Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LaunchItem } from "./LaunchItem";
import * as API from "../service/launches";

import logo from "../assets/logo-spacex.png";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, [])

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Cobetes
      </Heading>
      {launches.length === 0 ? <div>Loading...</div> : (
        <section>
          {launches.map((launch) =>
            <LaunchItem key={launch.flight_number} {...launch} />
          )}
        </section>
      )}
    </>
  )
}