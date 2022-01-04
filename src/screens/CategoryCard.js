import React from "react";
import { StyleSheet, View } from "react-native";
import { ImageBackground } from "react-native";
import { Image ,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export const CategoryCard=({url,name,description})=>{
    return(
       <View style={styles.conatiner}>
         <View style={{flexDirection:'row'}}>
         <View style={styles.left}>
            
        <Image style={styles.image} source={{ uri: url  }} />
         </View>   
         <View style={styles.right}>

          <Text style={{fontSize:14,fontWeight:'700'}}>{name}</Text>

          <Text style={{fontSize:10,fontWeight:'400',marginTop:5,}}>{description}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <TouchableOpacity>

            
            <Text style={{color:'#146588',fontWeight:'800',marginTop:5,marginBottom:5,}}>EXPLORE</Text>
            </TouchableOpacity>
            <Image style={{height:15,width:15,}} source={require('../assets/share.jpg')}/>
            </View>
         </View>
         </View>
       </View>
    )
}


const styles=StyleSheet.create({
    conatiner:{
        width:'100%',
        alignSelf:'center',
        marginTop:20,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        backgroundColor:'#E0ECDE',

    },
    image:{
        height:80,
        width:80,
        borderRadius:50,
    },
    left:{
      flex:3,
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
    },
    right:{
    flex:6,
    marginTop:10,
    marginRight:10,
    },
})