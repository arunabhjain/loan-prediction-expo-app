import { Pressable } from "react-native";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import devloper from "../assets/images/devloper.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";

function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>App Developed By:</Text>
      <Image source={devloper} style={styles.image} />
      <Text style={styles.name}>Arunabh Jain</Text>
      <View style={styles.social}>
        <Pressable
          style={styles.socialLinks}
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/arunabh-jain/")
          }
        >
          <Ionicons name="logo-linkedin" size={32} color="#14bf98" />
        </Pressable>
        <Pressable
          style={styles.socialLinks}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/arunabh_jain/")
          }
        >
          <Ionicons name="logo-instagram" size={30} color="#14bf98" />
        </Pressable>
        <Pressable
          style={styles.socialLinks}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/jain.arunabh/")
          }
        >
          <Ionicons name="logo-facebook" size={30} color="#14bf98" />
        </Pressable>
        <Pressable
          style={styles.socialLinks}
          onPress={() => Linking.openURL("https://wa.me/+918384922006")}
        >
          <Ionicons name="logo-whatsapp" size={30} color="#14bf98" />
        </Pressable>
        <Pressable
          style={styles.socialLinks}
          onPress={() =>
            Linking.openURL("mailto:arunabh.jain4us@gmail.com")
          }
        >
          <Ionicons name="mail" size={30} color="#14bf98" />
        </Pressable>
      </View>
      <Text style={styles.techHeading}>Tech Stack</Text>
      <View style={styles.techContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.details}>Frontend{"   "}:</Text>
          <Text style={styles.details}>Backend{"   "}:</Text>
          <Text style={styles.details}>API Endpoint{"   "}:</Text>
          <Text style={styles.details}>ML Model{"   "}:</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                "https://github.com/arunabhjain/loan-prediction-expo-app"
              )
            }
          >
            React Native
          </Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                "https://github.com/arunabhjain/loan-prediction-ml-app"
              )
            }
          >
            FastAPI
          </Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                "https://loan-prediction-backend-api.herokuapp.com/"
              )
            }
          >
            Heroku
          </Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                "https://github.com/arunabhjain/loan-prediction-ml-app"
              )
            }
          >
            Random Forest
          </Text>
        </View>
      </View>
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
    margin: 10,
    fontSize: 25,
    padding: 5,
    fontWeight: "semi-bold",
    color: "#fdfdfd",
  },
  techHeading: {
    marginTop: 30,
    fontSize: 30,
    padding: 5,
    fontWeight: "semi-bold",
    color: "#fdfdfd",
  },
  name: {
    fontSize: 32,
    width: "100%",
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    color: "#F7CA15",
    marginBottom: 10,
  },
  details: {
    fontSize: 15,
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold",
    color: "#fdfdfd",
    textAlign: "right",
    width: "100%",
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "#14bf98",
    borderWidth: 5,
    margin: 10,
  },
  social: {
    display: "flex",
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    width: 150,
  },
  detailsContainer: {
    width: 150,
  },
  techContainer: {
    display: "flex",
    flexDirection: "row",
  },
  links: {
    color: "#14bf98",
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
  },
  socialLinks: {
    textAlign: "center",
  },
});

export default About;
