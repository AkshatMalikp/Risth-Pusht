import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
export const NewsCard=(props)=>{
    return(
        
       <View style={styles.card}>
           <View style={styles.content}>

           
       <Image source={props.link} style={styles.image} />
       </View>
       </View>

    )
}

const styles=StyleSheet.create({
    card:{
      height:95,
      width:95,
      borderRadius:20,
      backgroundColor:'#E0ECDE',
    },
    content:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
},
image:{
    height:65,
    width:65,
},
text:{
 color:'white',
}
})