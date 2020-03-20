
import React from 'react';
import {StyleSheet , FlatList} from 'react-native';
import { CATEGORIES }  from '../Data/dummy-data';
import GridItemTile from '../Components/GridItemTile' ;
import { Icon } from 'native-base';

const CategoryScreen = props =>   
{    
        const renderGridItem = (itemData) =>
        {
        return (
          <GridItemTile  title = {itemData.item.title} color ={itemData.item.color} 
          OnSelect = {() => 
            {
              props.navigation.navigate({ routeName : 'CategroyMealScreen' , 
              params : { CatogeryId : itemData.item.id }});
              
            }}
            />
        );
        }

    return (
     <FlatList
      keyExtractor = {(item , index)=> item.id}
      data = {CATEGORIES} numColumns = {2} 
      renderItem = {renderGridItem}
      
      />
    );
  
  
};

CategoryScreen.navigationOptions = navData => {
  return {
    headerTitle : 'Meal Category' , 
    headerLeft : <Icon name="menufold" type = "AntDesign" style={{color: 'white' , margin : 10 }} 
    onPress = {() => { navData.navigation.toggleDrawer() }}
     />
  };
  };
 
const styles = StyleSheet.create({

  screen : 
  {
    flex : 1 , justifyContent : 'center' , alignItems : 'center' ,
  } ,
  gridItem :
  {
    flex : 1 , margin : 15 , height : 130 
  }

});

export default CategoryScreen ;
 
  
 