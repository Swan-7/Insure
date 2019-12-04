import React from "react";
import AnetaSecond from "./AnetaSecond";
import { Button, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
export default function Gender(props) {
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
      <div>
        <span>What gender do you identify as?</span>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 20
          }}
        >
          <div
            onClick={props.male}
            style={{
              paddingRight: 40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderWidth: 1,
              borderColor: "#F20909",
              borderStyle: "solid",
              backgroundColor: props.backgroundColor ? "#F20909" : "#fff",
              color: props.backgroundColor ? "#fff" : "#F20909",
              cursor: "pointer"
            }}
          >
            Male
          </div>
          <div
            style={{
              cursor: "pointer",
              paddingRight: 40,
              paddingLeft: 40,
              paddingTop: 10,
              paddingBottom: 10,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderWidth: 1,
              borderColor: "#F20909",
              borderStyle: "solid",
              backgroundColor:
                props.backgroundColor === true ? "#fff" : "#F20909",
              color: props.backgroundColor === true ? "#F20909" : "#FFF"
            }}
            onClick={props.female}
          >
            Female
          </div>
        </div>
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
