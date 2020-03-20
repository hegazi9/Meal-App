
import React, { Component , useState} from 'react';
import {StyleSheet , View ,Text , Switch} from 'react-native';
import { Icon } from 'native-base';
import Colors  from '../constant/color';

const FiltersScreen = props =>   
{
      
    const FilterSwitch = props =>
    {
       return (
        <View style = {styles.container}>
        <Text style = {{fontSize : 18 , color : 'gray', margin : 15 }}>{props.label}</Text>
      
        <Switch trackColor = {false} value = {props.state}
         onValueChange = {props.OnChange}/>
      </View>
       );
    }
  const [isGluten , setisGluten] = useState(false);
  const [isLactose , setisLactose] = useState(false);
  const [isVegan , setisVegan] = useState(false);
  const [isVegetarian , setisVegetarian] = useState(false);
    return (
      <View style = {styles.screen}>
        <Text style = {styles.title}>Available Filters \ Restrictions </Text>
        <FilterSwitch label = 'Gluten-Free' state = {isGluten} 
        OnChange = {newvalue => setisGluten(newvalue)} />
       
        <FilterSwitch label = 'Lactose-Free' state = {isLactose} 
        OnChange = {newvalue => setisLactose(newvalue)} />
       
        <FilterSwitch label = 'Vegan' state = {isVegan} 
        OnChange = {newvalue => setisVegan(newvalue)} />
       
        <FilterSwitch label = 'Vegetarian' state = {isVegetarian} 
        OnChange = {newvalue => setisVegetarian(newvalue)} />
      </View>
    );
  
  
}

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle : 'Filters' , 
    headerLeft : <Icon name="menufold" type = "AntDesign" style={{color: 'white' , margin : 10 }} 
    onPress = {() => { navData.navigation.toggleDrawer() }}
     />
  };
  };
 
const styles = StyleSheet.create({

  screen : 
  {
     alignItems : 'center' , flex : 1
  },
  title: 
  {
    fontSize : 20 , paddingVertical : 5 , fontWeight : 'bold' , textAlign : 'center' ,
     backgroundColor : 'black' , color : 'white' , margin : 20  , borderRadius : 5 , padding : 10
  },
  
  container : 
  {
    flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center' , width : '80%'
  }
});

export default FiltersScreen ;
 
  
 