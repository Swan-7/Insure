import React from "react";
import AnetaSecond from "./AnetaSecond";
import { Button, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
export default function Weight(props) {
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
        <span> What is your Weight?</span>
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
          <span>
            In the past 3 months, have you unintentionally <br /> lost more than
            20 pounds?
          </span>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 20
            }}
          >
            <div
              onClick={props.yes}
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
                  props.backgroundColor === true ? "#fff" : "#F20909",
                color: props.backgroundColor === true ? "#F20909" : "#FFF"
              }}
              onClick={props.no}
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
            In the past 12 months, have you used any tobacco,
            <br />
            nicotine or cigar products?
          </span>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 20
            }}
          >
            <div
              onClick={props.yesSmoke}
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
                backgroundColor: props.smokeBackgroundColor
                  ? "#F20909"
                  : "#fff",
                color: props.smokeBackgroundColor ? "#fff" : "#F20909",
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
                  props.smokeBackgroundColor === true ? "#fff" : "#F20909",
                color: props.smokeBackgroundColor === true ? "#F20909" : "#FFF"
              }}
              onClick={props.noSmoke}
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
            marginTop: 10
          }}
        >
          <span>
            Have you ever tested positive for HIV or been medically
            <br />
            diagnosed as having AIDS?
          </span>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 10
            }}
          >
            <div
              onClick={props.yesHiv}
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
                backgroundColor: props.hivBackgroundColor ? "#F20909" : "#fff",
                color: props.hivBackgroundColor ? "#fff" : "#F20909",
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
                  props.hivBackgroundColor === true ? "#fff" : "#F20909",
                color: props.hivBackgroundColor === true ? "#F20909" : "#FFF"
              }}
              onClick={props.noHiv}
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
            marginTop: 10
          }}
        >
          <span>
            Other than routine care, in the past 12 months, have you been
            <br />
            advised by a licensed medical professional to have surgery, <br />
            hospitalization, any diagnostic test (other than for HIV) or <br />
            any procedure which has not been completed or the results
            <br />
            are unknown?
          </span>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginTop: 10
            }}
          >
            <div
              onClick={props.yesMedCase}
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
                backgroundColor: props.medCaseBackgroundColor
                  ? "#F20909"
                  : "#fff",
                color: props.medCaseBackgroundColor ? "#fff" : "#F20909",
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
                  props.medCaseBackgroundColor === true ? "#fff" : "#F20909",
                color:
                  props.medCaseBackgroundColor === true ? "#F20909" : "#FFF"
              }}
              onClick={props.noMedCase}
            >
              No
            </div>
          </div>
        </div>

        <Button
          variant="contained"
          endIcon={<Icon>navigate_next</Icon>}
          style={{ backgroundColor: "#F60606", color: "#fff", marginTop: 20 }}
          onClick={props.onClickNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
