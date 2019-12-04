import React from "react";
import AnetaSecond from "./AnetaSecond";
import { Button, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
export default function Height(props) {
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
        <span> What is your Height?</span>
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
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: 20
          }}
        >
          <span>Do you have any physical disability?</span>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 20
            }}
          >
            <div
              onClick={props.yesPhysical}
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
                backgroundColor: props.physicalBackgroundColor
                  ? "#F20909"
                  : "#fff",
                color: props.physicalBackgroundColor ? "#fff" : "#F20909",
                cursor: "pointer"
              }}
            >
              Yes
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
                  props.physicalBackgroundColor === true ? "#fff" : "#F20909",
                color:
                  props.physicalBackgroundColor === true ? "#F20909" : "#FFF"
              }}
              onClick={props.noPhysical}
            >
              No
            </div>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: 20
          }}
        >
          <span>
            In the past 5 years, have you been declined for <br />
            life insurance?
          </span>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 20
            }}
          >
            <div
              onClick={props.yesDecline}
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
                backgroundColor: props.declineBackgroundColor
                  ? "#F20909"
                  : "#fff",
                color: props.declineBackgroundColor ? "#fff" : "#F20909",
                cursor: "pointer"
              }}
            >
              Yes
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
                  props.declineBackgroundColor === true ? "#fff" : "#F20909",
                color:
                  props.declineBackgroundColor === true ? "#F20909" : "#FFF"
              }}
              onClick={props.noDecline}
            >
              No
            </div>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: 20
          }}
        >
          <span>
            Do you have any life insurance or annuities currently <br />
            in force or pending?
          </span>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 20
            }}
          >
            <div
              onClick={props.yesInsurance}
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
                backgroundColor: props.insuranceBackgroundColor
                  ? "#F20909"
                  : "#fff",
                color: props.insuranceBackgroundColor ? "#fff" : "#F20909",
                cursor: "pointer"
              }}
            >
              Yes
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
                  props.insuranceBackgroundColor === true ? "#fff" : "#F20909",
                color:
                  props.insuranceBackgroundColor === true ? "#F20909" : "#FFF"
              }}
              onClick={props.noInsurance}
            >
              No
            </div>
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
