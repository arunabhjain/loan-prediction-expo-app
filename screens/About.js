import { Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";

function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>
        The ML model API used in this app is well curated and backed by powerful
        datasets, which are based on past approvals of loan.
      </Text>
      <Text style={styles.details}>
        So what are you waiting for, predict your chances of loan approval using
        our app.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("PREDICT")}
      >
        <Text style={styles.buttonText}>PREDICT APPROVAL</Text>
      </Pressable>
      <Text style={styles.heading}>App Developed By:</Text>
      <Text style={styles.name}>Nikhil, Lakshya and Siddharth</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#382B73",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    color: "#fdfdfd",
  },
  heading: {
    marginTop: 50,
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    color: "#fdfdfd",
  },
  name: {
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    color: "#fdfdfd",
  },
  details: {
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    color: "#fdfdfd",
    textAlign: "center",
  },
  button: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#14bf98",
    marginTop: 50,
    width: 300,
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
});

export default About;
