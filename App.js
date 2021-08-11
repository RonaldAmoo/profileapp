import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import profile from "./assets/profile.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
      <Image source={profile} style={styles.image} />

      <View style={styles.textField}>
        <Text style={styles.label}>School</Text>
        <TextInput
          style={styles.input}
          keyboard
          type="text"
          placeholder="school"
        />
      </View>
      <View style={styles.textField}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          keyboard
          type="email"
          placeholder="email"
        />
      </View>
      <View style={styles.textField}>
        <Text style={styles.label1}>Name</Text>
        <TextInput
          style={styles.input1}
          keyboard
          type="text"
          placeholder="name"
        />
      </View>
      <View style={styles.textField}>
        <Text style={styles.label1}>Nick.Name</Text>
        <TextInput
          style={styles.input1}
          keyboard
          type="text"
          placeholder="nick.name"
        />
      </View>
      <View style={styles.textField}>
        <Text style={styles.label1}>Emergency Number</Text>
        <TextInput
          style={styles.input1}
          keyboard
          type="number"
          placeholder="emergency number"
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "white",
  },
  heading: {
    marginTop: 100,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    marginTop: 50,
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf: "center",
    borderRadius: 75,
  },
  label: {
    color: "grey",
  },
  label1: {
    color: "#45b3e0",
  },
  textField: {
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  input1: {
    position: "relative",
    borderBottomColor: "silver",
    borderBottomWidth: 0.2,
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: "#45b3e0",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
