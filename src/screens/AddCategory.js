//import libraries
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
import Categories from "../../services/Categories";
import {urlToBlob} from "../../services/Misc";
// create a component
const AddCategory = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    color: "",
  });

  const [image, setImage] = useState(null);
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
      setImage(result)
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

  const addCategory = async () => {
    let localUri = image.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    formData.append("data",data)
    // Object.keys(data).forEach(function (key) {
    //   formData.append(key, data[key]);
    // })
    // formData.append('uri', await urlToBlob(localUri),filename);
    console.log(JSON.stringify(formData));
    Categories.store(formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log("response-error",error)
          console.log("response",error.response)
        })
  }

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

        {image && (
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Image
              source={{ uri: image.uri }}
              style={{
                width: 300,
                height: 300,
              }}
            />
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
