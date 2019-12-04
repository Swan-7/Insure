import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBackIos";
export default function AnetaSecond(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "absolute",
        top: 30
      }}
    >
      <div style={{ position: "absolute", left: 40 }}>
        <IconButton onClick={props.backClick}>
          <BackIcon />
        </IconButton>
      </div>
      <h1 style={{ color: "#F60606", marginBottom: 0 }}>Aneta</h1>
      <h4
        style={{
          color: "#302F2F",
          marginTop: 0,
          marginBottom: 20
        }}
      >
        Do Insurance the Easy Way
      </h4>
      <hr
        color="#F60606"
        size="5"
        style={{
          width: "20%",
          BackgroundColor: "#F60606",
          borderColor: "#F60606",
          color: "#F60606",
          alignSelf: "flex-start"
        }}
      />
    </div>
  );
}
