import React from "react";
import { Checkbox, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import AnetaSecond from "./AnetaSecond";
import FormControlLabel from "@material-ui/core/FormControlLabel";
export default function Medical(props) {
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
          In the past 10 years, have you been medically diagnosed or
          <br /> medically treated for:
        </span>
        <h6>(Select all that Apply)</h6>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 20,
            width: "40%",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={props.mentalCheck}
                onChange={props.onChangeMental}
                // value={false}
                color="primary"
              />
            }
            label="Depression or other mental disorder"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.alcohol}
                onChange={props.onChangeAlcohol}
                // value={false}
                color="primary"
              />
            }
            label="Alcohol abuse"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.chest}
                onChange={props.onChangeChest}
                // value={false}
                color="primary"
              />
            }
            label="Chest pain"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.diabetes}
                onChange={props.onChangeDiabetes}
                // value={false}
                color="primary"
              />
            }
            label="Diabetes"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.stroke}
                onChange={props.onChangeStroke}
                // value={false}
                color="primary"
              />
            }
            label="Stroke"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={props.seizure}
                onChange={props.onChangeSeizure}
                // value={false}
                color="primary"
              />
            }
            label="Seizure disorder"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.none}
                onChange={props.onChangeNone}
                // value={false}
                color="primary"
              />
            }
            label="None of the above"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.heart}
                onChange={props.onChangeHeart}
                // value={false}
                color="primary"
              />
            }
            label="Heart disease"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.cancer}
                onChange={props.onChangeCancer}
                // value={false}
                color="primary"
              />
            }
            label="Cancer"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.organ}
                onChange={props.onChangeOrgan}
                // value={false}
                color="primary"
              />
            }
            label="Organ transplant"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.liver}
                onChange={props.onChangeLiver}
                // value={false}
                color="primary"
              />
            }
            label="Liver cirrhosis or drug abuse"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.peripheral}
                onChange={props.onChangePeripheral}
                // value={false}
                color="primary"
              />
            }
            label="Peripheral arterial disease"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.kidney}
                onChange={props.onChangeKidney}
                // value={false}
                color="primary"
              />
            }
            label="Chronic kidney disease"
          />
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
  );
}
