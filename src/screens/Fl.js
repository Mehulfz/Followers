import React from 'react';
import { View,StyleSheet,TextInput,Pressable,Text , ScrollView} from 'react-native';
import Ch from '../components/Ch';
import Navbar from '../components/Navbar';
import Tick from '../components/Tick';
import {useNavigation} from '@react-navigation/native'


const Fl = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
    <Navbar navheading="Followers List"/>
    <TextInput style={styles.search}  placeholder='Search by name' placeholderTextColor={'#000000'}/>
    <ScrollView>
    <Tick/>
    <View style={{alignItems:"center",marginTop:30}}>
    <Pressable style={styles.btncontainer}
    onPress={() => navigation.navigate('Selectedusers')}
    >
      <Text style={styles.btn}>Next</Text>
    </Pressable>
    </View>
    </ScrollView>
    </View>
  );
}

export default Fl;

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#ffffff",
        height:'100%',
    },
    search:{
      borderWidth:1,
      borderRadius:10,
      width:'90%',
      marginHorizontal:20
    },
    btncontainer:{
      backgroundColor:'#5cb7e5',
      width:100,
      height:50,
      // marginBottom:200,
      alignItems:"center",
      justifyContent:'center',
      borderRadius:5
    },
    btn:{
      color:'#000000',
      fontSize:25,
      fontWeight:'700'
    }
})