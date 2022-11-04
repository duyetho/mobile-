import { View, Text, StyleSheet , Image} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View>
      <View style={styles.profileName} >
        <Image
        source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fr1owd6MRbY8x4olsdPPBsbrG4JD3iaY0Q&usqp=CAU'
        }}
        style={styles.avatar}
        ></Image>
      </View>

      <View style={styles.img_user}>
        <Text style={styles.userName}>Hi, Duyet</Text>
        <Text> <Text>Welcome to Medtech</Text></Text>
      </View>

    </View>
   
  )
}
const styles= StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius:50,
  },
  userName:{
    fontSize:20,
    color:'black',
    fontWeight: "bold",
  },
  profileName:{
    flex:1,
    flexDirection:'row'
  },
  img_user:{
    marginLeft:67,
    marginTop:5,
  },
  container:{
    marginLeft:40,
    marginTop: 30,
    flexDirection:'row',
    
  },
  list:{
    flexDirection:'row',
    flex: 1,
  },
  icon:{
    
  },
  line:{
    marginLeft:40
  }
});
export default Profile;