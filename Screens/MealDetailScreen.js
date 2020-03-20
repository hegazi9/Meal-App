
import React, { Component , useState} from 'react';
import {StyleSheet , ScrollView ,View,Text , Image , Alert, ToastAndroid} from 'react-native';
import { MEALS } from '../Data/dummy-data';
import { Icon } from 'native-base';

const MealDetailScreen = props =>   
{
    
  const mealID = props.navigation.getParam('mealID');
  const selectedMeal = MEALS.find( meal => meal.id === mealID);
    return (
      <ScrollView>
       <Image source = {{ uri : selectedMeal.imageUrl}} style = {styles.bgImge}/>
       <View style = {styles.details}>
                  <Text>{selectedMeal.duration}m</Text>
                  <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                  <Text>{selectedMeal.affordability.toUpperCase()}</Text>
                  </View>
          <Text style = {styles.title}>Ingredients</Text>
          {
            selectedMeal.ingredients.map(ingredients => (
            <Text key = {ingredients} style = {styles.steps}>{ingredients}</Text>
            ))
          }
          <Text style = {styles.title}>Steps</Text>
          
          {
            selectedMeal.steps.map(steps => (
            <Text key = {steps} style = {styles.steps}>{steps}</Text>
            ))
          }
                    
      </ScrollView>
      
    );
  
  
}



MealDetailScreen.navigationOptions = navigationData =>
{
  const mealID = navigationData.navigation.getParam('mealID');
  
  const selectedMeal = MEALS.find( meal => meal.id === mealID);
  return {
    headerTitle : selectedMeal.title , 
    headerRight : <Icon name="star" type = "AntDesign" style={{color: 'gold' , margin : 10 }} 
    onPress = {() => 
      {
       const FavID =  navigationData.navigation.navigate({ routeName : 'Favourites' , 
              params : { FavID : mealID }});
        ToastAndroid.showWithGravityAndOffset(
          'It\'s Not Use Now.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
          );
          
       }}
    />
  };
}

 
const styles = StyleSheet.create({
  bgImge : 
  {
    width : '100%' , height : 200, 
  },
  details : 
  {
    flexDirection : 'row' , justifyContent : 'space-around' , padding : 15
  },
  title: 
  {
    fontSize : 22 , paddingVertical : 5 , fontWeight : 'bold' , textAlign : 'center' , backgroundColor : 'rgba(0,0,0,0.07)'
  },
  steps :
  {
    marginHorizontal : 20 , marginVertical : 10 , padding : 10 , 
    borderWidth : 1 , borderColor : '#ccc'
  }  
  });
 
export default MealDetailScreen ;
 
