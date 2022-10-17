import React from 'react'
import Constants from 'expo-constants';
import { Alert, StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import MembersList from './MembersList.jsx';

const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
        <Text>OrganiApp</Text>
        <MembersList/>
    </View>
  )
}

export default Main