import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import axios from "axios";
import ModalComponent from "../components/ModalComponent";
import LoadingModal from "../components/LoadingModal";
import DropdownComponent from "../components/DropdownComponent";
import InputComponent from "../components/InputComponent";

function Predict() {
  const [isFetching, setIsFetching] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const [gender, setGender] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [dependents, setDependents] = useState("");
  const [education, setEducation] = useState("");
  const [selfEmployed, setSelfEmployed] = useState("");
  const [app, setApp] = useState("");
  const [coapp, setCoapp] = useState("");
  const [loanAmt, setLoanAmt] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [creditHistory, setCreditHistory] = useState("");
  const [propertyArea, setPropertyArea] = useState("");

  const predictLoan = async () => {
    if (
      gender === "" ||
      martialStatus === "" ||
      dependents === "" ||
      education === "" ||
      selfEmployed === "" ||
      app === "" ||
      coapp === "" ||
      loanAmt === "" ||
      loanTerm === "" ||
      creditHistory === "" ||
      propertyArea === ""
    ) {
      setModalText("PLEASE FILL ALL THE DETAILS");
      setModalVisible(true);
      return null;
    }

    setIsFetching(true);
    try {
      const bodyData = {
        gender: gender,
        married: martialStatus,
        depend: dependents,
        edu: education,
        selfemp: selfEmployed,
        app: app,
        coapp: coapp,
        loan: loanAmt,
        loanterm: loanTerm,
        credit: creditHistory,
        prop: propertyArea,
      };
      const response = await axios.post(
        "https://loan-prediction-backend.herokuapp.com/api/predict-loan",
        bodyData
      );
      const data = await response.data;
      if (data.data === "Y") {
        setModalText("CONGRATULATIONS! LOAN APPROVED");
      } else {
        setModalText("SORRY! LOAN NOT APPROVED");
      }
    } catch (error) {
      setModalText(
        "UNKNOWN ERROR OCCURED. PLEASE TRY AGAIN."
      );
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
    setIsFetching(false);
    setModalVisible(true);

    setApp("");
    setCoapp("");
    setCreditHistory("");
    setDependents("");
    setEducation("");
    setGender("");
    setLoanAmt("");
    setLoanTerm("");
    setMartialStatus("");
    setSelfEmployed("");
    setPropertyArea("");
  };

  const clearAll = () => {
    setApp("");
    setCoapp("");
    setCreditHistory("");
    setDependents("");
    setEducation("");
    setGender("");
    setLoanAmt("");
    setLoanTerm("");
    setMartialStatus("");
    setSelfEmployed("");
    setPropertyArea("");
  };

  const genderData = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const educationData = [
    { label: "Graduate", value: "Graduate" },
    { label: "Not Graduate", value: "Not Graduate" },
  ];

  const martialData = [
    { label: "Married", value: "Yes" },
    { label: "Single", value: "No" },
  ];

  const dependentsData = [
    { label: "None", value: "0" },
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three or more", value: "3+" },
  ];

  const selfEmployedData = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const creditHistoryData = [
    { label: "Yes", value: "1" },
    { label: "No", value: "0" },
  ];

  const propertyAreaData = [
    { label: "Urban", value: "Urban" },
    { label: "Semi-Urban", value: "Semiurban" },
    { label: "Rural", value: "Rural" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LoadingModal isFetching={isFetching} setIsFetching={setIsFetching} />
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText={modalText}
      />

      <ScrollView style={styles.insideContainer}>
        <View style={styles.textFieldContainer}>
          <InputComponent
            title="Applicant Income"
            placeholder="Enter between 10,000 - 81,00,000"
            value={app}
            setValue={setApp}
          />
        </View>
        <View style={styles.textFieldContainer}>
          <InputComponent
            title="Co-Applicant Income"
            placeholder="Enter between 0 - 41,66,700"
            value={coapp}
            setValue={setCoapp}
          />
        </View>
        <View style={styles.textFieldContainer}>
          <InputComponent
            title="Loan Amount"
            placeholder="Enter between 0 - 3,40,900"
            value={loanAmt}
            setValue={setLoanAmt}
          />
        </View>
        <View style={styles.textFieldContainer}>
          <InputComponent
            title="Loan Term"
            placeholder="Enter between 65 - 480"
            value={loanTerm}
            setValue={setLoanTerm}
          />
        </View>

        <View style={styles.dropdownContainer}>
          <DropdownComponent
            name={genderData}
            rLabel="Gender"
            setValue={setGender}
            value={gender}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <DropdownComponent
            name={martialData}
            rLabel="Martial Status"
            setValue={setMartialStatus}
            value={martialStatus}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <DropdownComponent
            name={dependentsData}
            rLabel="Dependents"
            setValue={setDependents}
            value={dependents}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <DropdownComponent
            name={educationData}
            rLabel="Education"
            setValue={setEducation}
            value={education}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <DropdownComponent
            name={selfEmployedData}
            rLabel="Self Employed"
            setValue={setSelfEmployed}
            value={selfEmployed}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <DropdownComponent
            name={creditHistoryData}
            rLabel="Credit History"
            setValue={setCreditHistory}
            value={creditHistory}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <DropdownComponent
            name={propertyAreaData}
            rLabel="Property Area"
            setValue={setPropertyArea}
            value={propertyArea}
          />
        </View>
        <View style={styles.buttonOuter}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={clearAll}>
              <Text style={styles.buttonText}>CLEAR</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={predictLoan}>
              <Text style={styles.buttonText}>PREDICT</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#473080",
    alignItems: "center",
    justifyContent: "center",
  },
  insideContainer: {
    backgroundColor: "#473080",
    width: "100%",
    paddingTop: 20,
  },
  textFieldContainer: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 10,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#14bf98",
    marginTop: 7.5,
    marginBottom: 7.5,
    width: 150,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#382B73",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    height: 75,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  buttonOuter: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  dropdownContainer: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default Predict;
