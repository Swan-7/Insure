const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const btoa = require("btoa");
const wml_credentials = new Map();

function apiPost(
  scoring_url,
  token,
  mlInstanceID,
  payload,
  loadCallback,
  errorCallback
) {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", loadCallback);
  oReq.addEventListener("error", errorCallback);
  oReq.open("POST", scoring_url);
  oReq.setRequestHeader("Accept", "application/json");
  oReq.setRequestHeader("Authorization", token);
  oReq.setRequestHeader("ML-Instance-ID", mlInstanceID);
  oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  oReq.send(payload);
}

let credential = {
  apikey: "YzA-PxUPrcCw097DTrhhVFeqvK1gmpqOp6iEjZJ9y6cL",
  instance_id: "2328cd58-3766-4e66-8902-5be12432f655",
  url: "https://eu-gb.ml.cloud.ibm.com",
  username: "madusei42@gmail.com",
  password: "Hebrews138"
};
// NOTE: generate iam_token based on provided documentation
const wmlToken = "Bearer " + credential;

// NOTE: retrieve ml_instance_id based on provided documentation
const mlInstanceId = btoa("2328cd58-3766-4e66-8902-5be12432f655");

// NOTE: manually define and pass the array(s) of values to be scored in the next line
const payload =
  '{"input_data": [{"fields": ["Age", "Height", "Weight", "Gender", "Disability", "Weight_Loss", "Smoker", "HIV", "Med_Case", "Medical_Keyword_1", "Medical_Keyword_2", "Medical_Keyword_3", "Medical_Keyword_4", "Medical_Keyword_5", "Medical_Keyword_6", "Medical_Keyword_7", "Medical_Keyword_8", "Medical_Keyword_9", "Medical_Keyword_10", "Medical_Keyword_11", "Medical_Keyword_12", "Medical_Keyword_13", "Medical_Keyword_14", "Ins_Dec", "Age_Weight", "Age_Height", "Age_2", "Age_3", "Height_3", "Height_2", "Age_description", "Height_description", "Weight_2", "Weight_3", "Weight_description", "Low_end_risk", "High_end_risk"], "values": [["0.5", "0.2", "0.6", "1", "3", "2", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "2", "0.8", "0.5", "0.5", "0.3", "0.5", "0.2", "2", "2", "0.5", "0.3", "2", "0", "0"]]}]}';
const scoring_url =
  "https://eu-gb.ml.cloud.ibm.com/v4/deployments/c1e5aee7-ff50-4ec1-a80e-ba092e502b8e/predictions";

apiPost(
  scoring_url,
  wmlToken,
  mlInstanceId,
  payload,
  function(resp) {
    let parsedPostResponse;
    try {
      parsedPostResponse = JSON.parse(this.responseText);
    } catch (ex) {
      // TODO: handle parsing exception
    }
    console.log("Scoring response");
    console.log(parsedPostResponse);
  },
  function(error) {
    console.log(error);
  }
);
