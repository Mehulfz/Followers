import React from 'react';
import { View, Text, CheckBox } from 'react-native';

const User = (props) => {
  return (
    <View>
      <View>
      <Text>{props.followers}</Text>
      
      </View>
    </View>
  );
}

export default User;
