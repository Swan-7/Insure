import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import DateOfBirth from "./components/DateOfBirth";
import Gender from "./components/Gender";
import Height from "./components/Height";
import Weight from "./components/Weight";
import Medical from "./components/Medical";

class App extends React.Component {
  state = {
    welcome: false,
    dateOfBirth: false,
    gender: false,
    weightState: false,
    heightState: false,
    medical: true,
    age: null,
    ageErrorMessage: "",
    ageError: false,
    weightLossBackground: true,
    genderBackground: true,
    genderValue: 1,
    height: null,
    heightErrorMessage: "",
    heightError: false,
    weight: null,
    weightErrorMessage: "",
    weightError: false,
    weightLoss: 2,
    smoke: 1,
    smokeBackgroundColor: true,
    hiv: 1,
    hivBackgroundColor: true,
    medCase: 1,
    medCaseBackgroundColor: true,
    physical: 1,
    physicalBackgroundColor: true,
    decline: 1,
    declineBackgroundColor: true,
    insurance: 3,
    insuranceBackgroundColor: true,
    mental: 0,
    alcohol: 0,
    chest: 0,
    diabetes: 0,
    stroke: 0,
    seizure: 0,
    none: 0,
    heart: 0,
    cancer: 0,
    organ: 0,
    liver: 0,
    peripheral: 0,
    kidney: 0
  };
  render() {
    return (
      <div>
        {this.state.welcome && (
          <Welcome
            onClick={() => {
              this.setState({
                welcome: false,
                dateOfBirth: true,
                gender: false
              });
            }}
          />
        )}
        {this.state.dateOfBirth && (
          <DateOfBirth
            age={this.state.age}
            error={this.state.ageError}
            label={this.state.ageError ? this.state.ageErrorMessage : "Age"}
            onChange={text => {
              let number = Number(text.target.value);
              if (
                Number.isInteger(number) &&
                text.target.value.length > 0 &&
                text.target.value.length <= 2
              ) {
                let scaled = (number - 18) / (75 - 18);
                this.setState({
                  age: number,
                  ageError: false,
                  ageErrorMessage: ""
                });
              } else if (!Number.isInteger(number)) {
                this.setState({
                  ageError: true,
                  ageErrorMessage: "Input should be a number"
                });
              } else if (text.target.value.length >= 3) {
                this.setState({
                  ageError: true,
                  ageErrorMessage: "Please enter only 2 digits"
                });
              }
            }}
            value={this.state.age}
            onClickNext={() => {
              if (this.state.age !== null && this.state.age >= 18) {
                this.setState({
                  dateOfBirth: false,
                  welcome: false,
                  gender: true
                });
              }
            }}
            backClick={() => {
              this.setState({
                dateOfBirth: false,
                welcome: true,
                gender: false
              });
            }}
          />
        )}
        {this.state.gender && (
          <Gender
            backgroundColor={this.state.genderBackground}
            male={() => {
              this.setState({
                genderValue: 1,
                genderBackground: true
              });
            }}
            female={() => {
              this.setState({
                genderValue: 2,
                genderBackground: false
              });
            }}
            backClick={() => {
              this.setState({
                dateOfBirth: true,
                welcome: false,
                gender: false
              });
            }}
            onClickNext={() => {
              this.setState({
                dateOfBirth: false,
                welcome: false,
                gender: false,
                heightState: true
              });
            }}
          />
        )}
        {this.state.heightState && (
          <Height
            physicalBackgroundColor={this.state.physicalBackgroundColor}
            declineBackgroundColor={this.state.declineBackgroundColor}
            insuranceBackgroundColor={this.state.insuranceBackgroundColor}
            age={this.state.height}
            error={this.state.heightError}
            label={
              this.state.heightError
                ? this.state.heightErrorMessage
                : "Height in cm"
            }
            onChange={text => {
              let number = Number(text.target.value);
              if (
                Number.isInteger(number) &&
                text.target.value.length > 0 &&
                text.target.value.length <= 3
              ) {
                let scaled = (number - 160) / (190 - 160);
                this.setState({
                  height: number,
                  heightError: false,
                  heightErrorMessage: ""
                });
              } else if (!Number.isInteger(number)) {
                this.setState({
                  heightError: true,
                  heightErrorMessage: "Input should be a number"
                });
              } else if (text.target.value.length >= 4) {
                this.setState({
                  heightError: true,
                  heightErrorMessage: "Please enter only 2 digits"
                });
              }
            }}
            yesPhysical={() => {
              this.setState({
                physical: 1,
                physicalBackgroundColor: true
              });
            }}
            noPhysical={() => {
              this.setState({
                physical: 3,
                physicalBackgroundColor: false
              });
            }}
            yesDecline={() => {
              this.setState({
                decline: 1,
                declineBackgroundColor: true
              });
            }}
            noDecline={() => {
              this.setState({
                decline: 3,
                declineBackgroundColor: false
              });
            }}
            yesInsurance={() => {
              this.setState({
                insurance: 1,
                insuranceBackgroundColor: true
              });
            }}
            noInsurance={() => {
              this.setState({
                insurance: 3,
                insuranceBackgroundColor: false
              });
            }}
            value={this.state.height}
            onClickNext={() => {
              if (this.state.height !== null && this.state.height > 160) {
                this.setState({
                  dateOfBirth: false,
                  welcome: false,
                  gender: false,
                  heightState: false,
                  weightState: true
                });
              }
            }}
            backClick={() => {
              this.setState({
                dateOfBirth: false,
                welcome: false,
                gender: true,
                heightState: false
              });
            }}
          />
        )}
        {this.state.weightState && (
          <Weight
            backgroundColor={this.state.weightLossBackground}
            smokeBackgroundColor={this.state.smokeBackgroundColor}
            hivBackgroundColor={this.state.hivBackgroundColor}
            medCaseBackgroundColor={this.state.medCaseBackgroundColor}
            yes={() => {
              this.setState({
                weightLoss: 1,
                weightLossBackground: true
              });
            }}
            no={() => {
              this.setState({
                weightLoss: 2,
                weightLossBackground: false
              });
            }}
            yesSmoke={() => {
              this.setState({
                smoke: 1,
                smokeBackgroundColor: true
              });
            }}
            noSmoke={() => {
              this.setState({
                smoke: 0,
                smokeBackgroundColor: false
              });
            }}
            yesHiv={() => {
              this.setState({
                hiv: 1,
                hivBackgroundColor: true
              });
            }}
            noHiv={() => {
              this.setState({
                hiv: 0,
                hivBackgroundColor: false
              });
            }}
            yesMedCase={() => {
              this.setState({
                medCase: 1,
                medCaseBackgroundColor: true
              });
            }}
            noMedCase={() => {
              this.setState({
                medCase: 0,
                medCaseBackgroundColor: false
              });
            }}
            age={this.state.weight}
            error={this.state.weightError}
            label={
              this.state.weightError
                ? this.state.weightErrorMessage
                : "Weight in KG"
            }
            onChange={text => {
              let number = Number(text.target.value);
              if (
                Number.isInteger(number) &&
                text.target.value.length > 0 &&
                text.target.value.length <= 3
              ) {
                let scaled = (number - 50) / (80 - 50);
                this.setState({
                  weight: number,
                  weightError: false,
                  weightErrorMessage: ""
                });
              } else if (!Number.isInteger(number)) {
                this.setState({
                  weightError: true,
                  weightErrorMessage: "Input should be a number"
                });
              } else if (text.target.value.length >= 4) {
                this.setState({
                  weightError: true,
                  weightErrorMessage: "Please enter only 2 digits"
                });
              }
            }}
            value={this.state.weight}
            onClickNext={() => {
              if (this.state.weight !== null && this.state.weight >= 50) {
                alert(this.state.weight);
                this.setState({
                  dateOfBirth: false,
                  welcome: false,
                  gender: false,
                  heightState: false,
                  medical: true,
                  weightState: false
                });
              }
            }}
            backClick={() => {
              this.setState({
                dateOfBirth: false,
                welcome: false,
                gender: false,
                heightState: true,
                weightState: false
              });
            }}
          />
        )}
        {this.state.medical && (
          <Medical
            mentalCheck={this.state.mental === 0 ? false : true}
            onChangeMental={value => {
              this.setState({
                mental: value.target.checked ? 1 : 0
              });
            }}
            alcohol={this.state.alcohol === 0 ? false : true}
            onChangeAlcohol={value => {
              this.setState({
                alcohol: value.target.checked ? 1 : 0
              });
            }}
            chest={this.state.chest === 0 ? false : true}
            onChangeChest={value => {
              this.setState({
                chest: value.target.checked ? 1 : 0
              });
            }}
            diabetes={this.state.diabetes === 0 ? false : true}
            onChangeDiabetes={value => {
              this.setState({
                diabetes: value.target.checked ? 1 : 0
              });
            }}
            stroke={this.state.stroke === 0 ? false : true}
            onChangeStroke={value => {
              this.setState({
                stroke: value.target.checked ? 1 : 0
              });
            }}
            seizure={this.state.seizure === 0 ? false : true}
            onChangeSeizure={value => {
              this.setState({
                seizure: value.target.checked ? 1 : 0
              });
            }}
            none={this.state.none === 0 ? false : true}
            onChangeNone={value => {
              this.setState({
                none: value.target.checked ? 1 : 0
              });
            }}
            heart={this.state.heart === 0 ? false : true}
            onChangeHeart={value => {
              this.setState({
                heart: value.target.checked ? 1 : 0
              });
            }}
            cancer={this.state.cancer === 0 ? false : true}
            onChangeCancer={value => {
              this.setState({
                cancer: value.target.checked ? 1 : 0
              });
            }}
            organ={this.state.organ === 0 ? false : true}
            onChangeOrgan={value => {
              this.setState({
                organ: value.target.checked ? 1 : 0
              });
            }}
            liver={this.state.liver === 0 ? false : true}
            onChangeLiver={value => {
              this.setState({
                liver: value.target.checked ? 1 : 0
              });
            }}
            peripheral={this.state.peripheral === 0 ? false : true}
            onChangePeripheral={value => {
              this.setState({
                peripheral: value.target.checked ? 1 : 0
              });
            }}
            kidney={this.state.kidney === 0 ? false : true}
            onChangekidney={value => {
              this.setState({
                kidney: value.target.checked ? 1 : 0
              });
            }}
            onClickNext={() => {}}
            backClick={() => {
              this.setState({
                dateOfBirth: false,
                welcome: false,
                gender: false,
                heightState: false,
                weightState: true,
                medical: false
              });
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
