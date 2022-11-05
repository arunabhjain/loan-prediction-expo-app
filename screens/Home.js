import { Pressable } from "react-native";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/header-background.jpg")}
      style={styles.headerImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          {" "}
          Predict your loan approval with our ML Prediction Model{" "}
        </Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PREDICT")}
          >
            <Text style={styles.buttonText}>PREDICT APPROVAL</Text>
          </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  text: {
    width: "90%",
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    marginBottom: 50,
    marginTop: 100,
  },
  button: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#14bf98",
    marginTop: 7.5,
    marginBottom: 7.5,
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
