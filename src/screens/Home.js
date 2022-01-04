import React from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import { SelectiveCard } from "./SeletiveCard"; 
import { ScrollView,TouchableOpacity,Image,Text,StyleSheet,SafeAreaView, View } from "react-native";
import { ProductCard } from "./ProductCard";
import { useState,useEffect } from "react";
import { getMarketData } from "./ApiService";
import { NewsCard } from "./NewsCard";
import { CategoryCard } from "./CategoryCard";
const slides=[

    {
    key:1,
    image : require('../assets/ad1.jpg'),
    },
    {
  
        key:2,
        image : require('../assets/ad1.jpg'),
    },
    {
  
        key:3,
        image : require('../assets/ad1.jpg'),
    },
]
export const Home=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMarketData=async ()=>{
            const MarketData = await getMarketData();
            setData(MarketData);
        }

      fetchMarketData();
    },[])
    
    const renderItem=({item})=>(
        <View>
            <Image source={item.image} style={{height:'100%',width:'95%',borderRadius:30,alignSelf:'center'}}/>
        </View>
    ); 
    return(
        <SafeAreaView style={styles.area}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,}}>
            <Image style={{height:30,width:108,}} source={require('../assets/logo.png')}/>
            <TouchableOpacity>
                
            <Image style={{height:30,width:30,}} source={require('../assets/bar.png')}/>
            
            </TouchableOpacity>
            
        </View>    
        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
        <View style={{ flex: 1, height: 1,shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 3,  
        elevation: 5 }} />
            </View>
        <ScrollView showsVerticalScrollIndicator={false}>

        
        <View >
        <Text style={{fontSize:25,marginTop:20,...styles.text}}>
         Hello there,
        </Text>
        <Text style={{fontSize:20,...styles.text}}>
         how can we serve you today...
        </Text>
        <View style={styles.adconatiner} >
        <AppIntroSlider renderItem={renderItem} data={slides} showNextButton={false} showDoneButton={false}/>

        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:10,}}>
        <SelectiveCard link={require("../assets/orders.jpg")} title='My Orders'/>
        <SelectiveCard link={require("../assets/trackorder.jpg")} title='Track Order'/>
        <SelectiveCard link={require("../assets/offers.jpg")} title='Best Offers'/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <SelectiveCard link={require("../assets/chat.jpg")} title='Chat'/>
        <SelectiveCard link={require("../assets/refer.jpg")} title='Refer Patient'/>
        <SelectiveCard link={require("../assets/payment.jpg")} title='Make Payment'/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginBottom:20,}}>
            <Text style={{fontSize:20,}} >Categories</Text>
            

            <TouchableOpacity>

            
            <Text style={{fontSize:20,color:'blue'}}>VIEW ALL</Text>
            </TouchableOpacity>
          
        </View>
        {
              data.map((item,index)=>{
                  return(
                    
                <CategoryCard  name={item.title} description={item.description} url={item.image}/>
                  )
           })
               }
        <Text style={{fontSize:18,fontWeight:'700' ,marginTop:40,}}>Featured Prodct</Text>
        {
              data.map((item,index)=>{
                  return(
                    
                <ProductCard  name={item.title} description={item.description} price={item.price} amount={item.quantity} url={item.image}/>
                  )
           })
               }
               <Text style={{fontSize:18,fontWeight:'700' ,marginTop:40,}}>Most Purchased Product</Text>
               {
              data.map((item,index)=>{
                  return(
                    
                <ProductCard  name={item.title} description={item.description} price={item.price} amount={item.quantity} url={item.image}/>
                  )
           })
               }

               <Text style={{fontSize:18,fontWeight:'700' ,marginTop:40,}}>Our Media Associates</Text>
               <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:10,marginTop:20,}}>
        <NewsCard link={require("../assets/news1.png")} title='My Orders'/>
        <NewsCard link={require("../assets/news2.png")} title='Track Order'/>
        <NewsCard link={require("../assets/news3.png")} title='Best Offers'/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:10,}}>
        <NewsCard link={require("../assets/news4.png")} title='Chat'/>
        <NewsCard link={require("../assets/news5.png")} title='Refer Patient'/>
        <NewsCard link={require("../assets/news6.png")} title='Make Payment'/>
        </View>
        <Text style={{alignSelf:'center',fontSize:12,fontWeight:'700',marginTop:30,marginBottom:50,}}>© ND Care Nirogam Pvt. Ltd. - All rights Reserved</Text>
        </View>
        
        </ScrollView>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({

area:{
    marginLeft:20,
    marginRight:20,
    marginTop:60,
},
text:{
color:'#146588',
marginLeft:10,
},
adconatiner:{
    width:'100%',
    height:180,
    marginTop:20,
    marginBottom:50,
  
    
   },
})