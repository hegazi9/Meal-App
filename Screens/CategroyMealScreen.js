
import React from 'react';
import {StyleSheet ,View,Text, FlatList } from 'react-native';
import { CATEGORIES  , MEALS } from '../Data/dummy-data';
import Colors from '../constant/color';
import MealList from '../Components/MealList';

const CategoryMealScreen = props =>   
{
    const catId = props.navigation.getParam('CatogeryId') ;
    const displayedMeals = MEALS.filter( meal => meal.categoryid.indexOf(catId) >= 0);
    return (
      <MealList datalist= {displayedMeals} navigation = {props.navigation}/>
    );
  
  
}

CategoryMealScreen.navigationOptions = navigationData => {
  
  const catId = navigationData.navigation.getParam('CatogeryId') ;
  const selectCategory = CATEGORIES.find( cat => cat.id === catId) ;
 
  return {
  headerTitle : selectCategory.title   , 
  headerStyle :
   {
    backgroundColor :  Platform.OS === 'android'? Colors.headerColor : ''
    } ,
    headerTintColor :  Platform.OS === 'android' ? 'white' : Colors.headerColor ,
  
};
};

export default CategoryMealScreen ;
 
  
 