import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export const SelectiveCard=(props)=>{
    return(
        <TouchableOpacity>

        
       <LinearGradient colors={['#2D6974','#68B39F']} style={styles.card}>
           <View style={styles.content}>

           
       <Image source={props.link} style={styles.image} />
       <Text style={styles.text}>{props.title}</Text>
       </View>
       </LinearGradient>
       </TouchableOpacity>

    )
}

const styles=StyleSheet.create({
    card:{
      height:105,
      width:100,
      borderRadius:20,
    },
    content:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
},
image:{
    height:50,
    width:50,
},
text:{
 color:'white',
}
})