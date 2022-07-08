import React from 'react';
import { View,StyleSheet,TextInput } from 'react-native';
import Ch from '../components/Ch';
import Navbar from '../components/Navbar';
import Tick from '../components/Tick';


const Fl = () => {
  
  return (
    <View style={styles.main}>
    <Navbar/>
    <TextInput style={styles.search}  placeholder='Search by name' placeholderTextColor={'#000000'}/>
    <Tick/>
    
    </View>
  );
}

export default Fl;

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#ffffff",
        height:'100%'
    },
    search:{
      borderWidth:1,
      borderRadius:10,
      width:'90%',
      marginHorizontal:20
    }
})