import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import members from "../data/members.js";
import MemberItem from "./MemberItem.jsx";

const MembersList = () => {
  return (
    <FlatList
      data={members}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: member }) => (
        <MemberItem {...member}/>
      )}
    />
  );
};

export default MembersList;
