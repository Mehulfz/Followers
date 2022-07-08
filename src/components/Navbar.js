import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>{props.navheading}</Text>
    </View>
  );
}

export default Navbar;

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#000000',
        alignItems:'center',
        height:60,
        justifyContent:'center',
        marginBottom:30
    },
    txt:{
        fontSize:25,
        fontWeight:'700',
        color:'#ffffff'
    }
})