
import React, { Component , useState} from 'react';
import {StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import MealList from '../Components/MealList';
import { MEALS } from '../Data/dummy-data';

const FavouritsScreen = props =>   
{
  const FavID = props.navigation.getParam('FavID');
        const FavMeals = MEALS.filter( meal => meal.id !== FavID );
    return (
      <MealList datalist= {FavMeals} navigation = {props.navigation}/>
    );
    }       
       
    

FavouritsScreen.navigationOptions = navData => {
  return {
    headerTitle : 'Photoes', 
    headerLeft : <Icon name="menufold" type = "AntDesign" style={{color: 'white' , margin : 10 }} 
    onPress = {() => { navData.navigation.toggleDrawer() }}
     />
  };
  };

  
const styles = StyleSheet.create({

  screen : 
  {
    flex : 1
  }
});

export default FavouritsScreen ;
 
  
 // android:roundIcon="@mipmap/ic_launcher_round"
     