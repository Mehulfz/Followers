import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  ScrollView,
  Image
} from "react-native";
import axios from "axios";

const Followers = () => {
  const [followerList, setFollowerList] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFollowerList, setSelectedFollowerList] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/octocat/followers").then(
      (response) => {
        console.log("respone", response);
        var result = response.data;
        setFollowerList(result);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }, []);

  const followerExists = (follower) => {
    return selectedFollowerList.some(function (el) {
      return el.id === follower.id;
    });
  };

  const selectFollower = (follower) => {
    return setSelectedFollowerList([...selectedFollowerList, follower]);
  };

  const unSelectFollower = (follower) => {
    const list = selectedFollowerList.filter((val) => val.id != follower.id);
    return setSelectedFollowerList(list);
  };

  const followerListDetails = (follower) => {
    return (
      <>
        <View style={styles.main}>
          <Text style={styles.skipcontainer}>
            {followerExists(follower) ? (
               <Pressable onPress={() => unSelectFollower(follower)}>
               <Image style={{height:20,width:20}} source={require('../assets/checkedimg.png')}/>
               </Pressable>
            ) : (
              <Pressable onPress={() => selectFollower(follower)}>
              {/* <Text style={{color:'#ffffff',fontSize:20}}>Non-Active</Text>  */}
              <Image style={{height:40,width:40}} source={require('../assets/uncheckedimg.png')}/>
              </Pressable>
            )}
          </Text>
          
          <View><Text style={{color:"#000000",fontSize:18}}>{follower.login}</Text></View>
        </View>
      </>
    );
  };

  const renderFollowerList = () => {
    if (searchTerm === "") {
      return followerList.map((follower, index) => (
        <View key={index} style={styles.skipcontainer}>
          {followerListDetails(follower)}
        </View>
      ));
    } else {
      return followerList
        .filter((follower) => follower.login.includes(searchTerm))
        .map((follower, index) => (
          <View key={index}>{followerListDetails(follower)}</View>
        ));
    }
  };

  const deleteFollowers = () => {
    const updatedFollowerList = followerList.filter(
      (ar) => !selectedFollowerList.find((rm) => rm.id === ar.id)
    );
    return setFollowerList(updatedFollowerList);
  };

  return (
    
    <View style={{ padding: 10, flex: 1 , backgroundColor:'#ffffff'}}>
    
      <View>
        <Text style={{color:'#ffffff',textAlign:"center",fontSize:25}}>
        Followers
        </Text>
      </View>
      <TextInput
        style={styles.phone}
        value={searchTerm}
        onChangeText={(e) => setSearchTerm(e)}
        placeholder="Search by username"
        placeholderTextColor={"#000000"}
      />
        <ScrollView style={{backgroundColor:"#ffffff",marginTop:30}}>
      <View style={{color:"#000000"}}>
        {followerList && followerList.length > 0 ? renderFollowerList() : null}
      </View>
      </ScrollView>

      <View style={{alignItems:"center"}}>
        <Pressable style={styles.btncontainer} onPress={deleteFollowers}>
          <Text style={styles.continue}>Delete</Text>
        </Pressable>
      </View>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  phone: {
    width: "100%",
    fontSize: 16,
    color: "#525252",
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
    borderColor: "#e44361a3",
    borderWidth: 0.5,
    borderRadius: 5,
    textAlign: "center"
  },

  skipcontainer: {
    display: "flex",
    flexDirection: "row",
    marginTop:5
  },
  continue:{
    color:'#ffffff',
    fontSize:18,
    fontWeight:'800'
  },
  main:{
    backgroundColor:"#ffffff",
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  btncontainer:{
    backgroundColor:'#707070',
    height:50,
    width:100,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  }
});

export default Followers;

