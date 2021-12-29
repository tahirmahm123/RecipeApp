import React from "react";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

const CustomCheckBox = ({ name, checked, handleCheckBoxes }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          flex: 3,
          textAlign: "left",
          marginLeft: 20,
          textTransform: "capitalize",
        }}
      >
        {name}
      </Text>
      <View style={{ marginRight: 20 }}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            handleCheckBoxes(name);
          }}
        />
      </View>
    </View>
  );
};

export default CustomCheckBox;
