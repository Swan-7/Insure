import React from "react";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import "../App.css";
import Aneta from "./Aneta";
export default function Welcome(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
      }}
      //   className="App-headers"
    >
      <Aneta />
      <Button
        variant="contained"
        endIcon={<Icon>navigate_next</Icon>}
        style={{ backgroundColor: "#F60606", color: "#fff" }}
        onClick={props.onClick}
      >
        Click here to begin
      </Button>
    </div>
  );
}
