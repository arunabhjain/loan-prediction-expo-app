import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropdownComponent = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          isFocus && { color: "#382B73", backgroundColor: "#14bf98" },
        ]}
      >
        {props.rLabel}
      </Text>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && { borderColor: "#14bf98", borderWidth: 2 },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={props.name}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Please Select" : ""}
        value={props.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          props.setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#382B73",
  },
  dropdown: {
    textAlign: "center",
    height: 70,
    width: 300,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 20,
    paddingHorizontal: 8,
    color: "white",
    fontSize: 16,
  },
  label: {
    width: 150,
    position: "absolute",
    backgroundColor: "#d3d3d3",
    color: "#382B73",
    left: 75,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 5,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 10,
  },
  placeholderStyle: {
    textAlign: "center",
    color: "#b3b3b3",
    fontSize: 16,
  },
  selectedTextStyle: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
