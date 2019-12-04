import React from "react";
import AnetaSecond from "./AnetaSecond";
import { Button, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
export default function DateOfBirth(props) {
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
    >
      <AnetaSecond backClick={props.backClick} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span> Please provide us with your age</span>
        <TextField
          error={props.error}
          type="number"
          id="outlined-basic"
          label={props.label}
          variant="outlined"
          onChange={props.onChange}
          style={{ marginTop: 10 }}
          inputProps={{
            maxLength: 2
          }}
          value={props.value}
        />
        <Button
          variant="contained"
          endIcon={<Icon>navigate_next</Icon>}
          style={{ backgroundColor: "#F60606", color: "#fff", marginTop: 40 }}
          onClick={props.onClickNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
