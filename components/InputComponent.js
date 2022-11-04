import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const InputComponent = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          isFocus && { color: "#382B73", backgroundColor: "#14bf98" },
        ]}
      >
        {props.title}
      </Text>
      <TextInput
        style={[
          styles.inputContainer,
          isFocus && { borderColor: "#14bf98", borderWidth: 2 },
        ]}
        placeholder={props.placeholder}
        value={props.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={(val) => props.setValue(val)}
        placeholderTextColor="#c3c3c3"
        keyboardType="number-pad"
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#382B73",
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
  inputContainer: {
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
});
