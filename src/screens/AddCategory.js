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
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-paper";
import CategoryGridTile from "./../components/CategoryGridTile";
import Categories from "../../services/Categories";
import baseUrl from "../../services/BaseUrl";

// create a component
const AddCategory = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    color: "",
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

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          label="Title"
          value={data.title}
          type="outlined"
          onChangeText={(text) => handleInput("title", text)}
          style={styles.margin}
        />

        <TextInput
          label="Color"
          value={data.color}
          type="outlined"
          onChangeText={(text) => handleInput("color", text)}
          style={styles.margin}
        />

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
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

//make this component available to the app
export default AddCategory;
