import React from "react";
import { StyleSheet, View } from "react-native";
import { ImageBackground } from "react-native";
import { Image ,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export const ProductCard=({url,name,price,description,amount})=>{
    return(
       <ImageBackground source={require('../assets/productbackground.png')} style={styles.conatiner}>
         <View style={{flexDirection:'row'}}>
         <View style={styles.left}>
            
        <Image style={styles.image} source={{ uri: url  }} />
         </View>   
          <View style={{ flexDirection: 'column', alignItems: 'center',marginLeft:10,marginRight:10,}}>
                <View style={{ flex: 1, width: 1, backgroundColor: 'black' }} />
            </View>
         <View style={styles.right}>

          <Text style={{fontSize:14,fontWeight:'700'}}>{name}</Text>

          <Text style={{fontSize:10,fontWeight:'400',marginTop:5,}}>{description}</Text>
          <Text style={{color:'#146588',marginTop:3,fontWeight:'700'}}>$ {price}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5, }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <TouchableOpacity>

            
            <Text style={{color:'#146588',fontWeight:'800'}}>ADD TO CART</Text>
            </TouchableOpacity>
            <Image style={{height:15,width:15,}} source={require('../assets/share.jpg')}/>
            </View>
         </View>
         </View>
       </ImageBackground>
    )
}


const styles=StyleSheet.create({
    conatiner:{
        width:'100%',
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        

    },
    image:{
        height:113,
        width:90,
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