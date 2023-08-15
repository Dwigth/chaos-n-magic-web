// import React from "react";
import CSInfo from "./info/CSinfo";
import CSenergy from "./energy/CSenergy";
import CSattributes from "./attributes/CSattributes";
import CSdefense from "./defense/CSdefense";
import CSstats from "./stats/CSstats";

export default function characterSheet() {
  return (
    <>
      <CSInfo />
      <CSenergy />
      <CSattributes />
      <CSdefense />
      <CSstats />
    </>
  );
}
