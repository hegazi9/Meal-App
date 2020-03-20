
import React from 'react';
import { View  , StyleSheet , FlatList} from 'react-native';
import MealItem from './MealItem';

const MealList = props =>
{
  const renderMealItem = itemData =>
  {
  return (
      <MealItem title = {itemData.item.title} 
      imageUrl = {itemData.item.imageUrl}
      duration = {itemData.item.duration} 
      complexity = {itemData.item.complexity} affordability = {itemData.item.affordability}
       OnSelectMeal = {()=>{
         props.navigation.navigate({ routeName : 'MealDetailScreen' , params : 
        {
          mealID : itemData.item.id
        }})
       }}/>
  );
  } 
  
    return (
        
        <View style = {styles.screen}>
        <FlatList  data = {props.datalist} keyExtractor = { (item , index ) => item.id}
          renderItem = {renderMealItem} style ={{width : '100%'}}
        />
           
        </View>         
    );
}

const styles = StyleSheet.create({

  screen : 
  {
    flex : 1 ,justifyContent : 'center' , alignItems : 'center'
  }
});
  export default MealList;