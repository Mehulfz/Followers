import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
// import { Checkbox } from 'react-native-paper';
// import CheckBox from 'react-native-check-box';
import { CheckBox } from 'react-native-elements';
const Ch = () => {
   
   return (
   <View>
    <CheckBox
      title="Reading" checked={false}
      // checkedTitle="hii"
    />
   </View>
   );
};
export default Ch