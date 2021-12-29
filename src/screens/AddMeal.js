//import liraries
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import CustomCheckBox from "../components/custom-checkbox";
import * as ImagePicker from "expo-image-picker";
import { TextInput, Checkbox } from "react-native-paper";
import CategoryGridTile from "./../components/CategoryGridTile";
import Categories from "../../services/Categories";
import baseUrl from "../../services/BaseUrl";
import Textarea from "react-native-textarea";

// create a component
const AddMeal = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    ingrediants: "",
    steps: "",
    isGlutenFree: false,
    isVeganFree: false,
    isVegertarianFree: false,
    isLactoseFree: false,
    image: null,
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setData({ ...data, ["image"]: result.uri });
    }
  };

  if (loading)
    return (
      <View style={styles.content}>
        <Text>Please Wait While Data is Laoding</Text>
      </View>
    );

  const handleInput = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleCheckBoxes = (value) => {
    setData({ ...data, [value]: !data[value] });
  };

  return (
    <ScrollView style={{ margin: 20 }}>
      <View style={{ flex: 1 }}>
        <TextInput
          label="Title"
          value={data.title}
          type="outlined"
          onChangeText={(text) => handleInput("title", text)}
          style={styles.margin}
        />

        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          onChangeText={(text) => handleInput("ingrediants", text)}
          defaultValue={data.ingrediants}
          maxLength={120}
          placeholder={"wrtie ingrediants here..."}
          placeholderTextColor={"grey"}
          underlineColorAndroid={"transparent"}
        />
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          onChangeText={(text) => handleInput("steps", text)}
          defaultValue={data.steps}
          maxLength={120}
          placeholder={"write how to cook here..."}
          placeholderTextColor={"grey"}
          underlineColorAndroid={"transparent"}
        />
        <View>
          <CustomCheckBox
            name={"isGlutenFree"}
            checked={data["isGlutenFree"]}
            handleCheckBoxes={handleCheckBoxes}
          />
          <CustomCheckBox
            name={"isVeganFree"}
            checked={data["isVeganFree"]}
            handleCheckBoxes={handleCheckBoxes}
          />
          <CustomCheckBox
            name={"isVegertarianFree"}
            checked={data["isVegertarianFree"]}
            handleCheckBoxes={handleCheckBoxes}
          />
          <CustomCheckBox
            name={"isLactoseFree"}
            checked={data["isLactoseFree"]}
            handleCheckBoxes={handleCheckBoxes}
          />
        </View>

        <Button title="Pick an image from camera roll" onPress={pickImage} />

        {data.image && (
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Image
              source={{ uri: data.image }}
              style={{
                width: 300,
                height: 300,
              }}
            />
            <View style={{ marginTop: 20 }}>
              <Button
                title="Upload"
                onPress={() => alert("data uploaded")}
                color="green"
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    marginBottom: 20,
  },
  textareaContainer: {
    height: 180,
    margin: 5,
    padding: 5,
    backgroundColor: "#e7e7e7",
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333",
    padding: 5,
  },
});

//make this component available to the app
export default AddMeal;
