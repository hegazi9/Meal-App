import React  from 'react' ;
import { createAppContainer } from 'react-navigation' ;
import {createDrawerNavigator }   from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs' ;
import { createStackNavigator  } from 'react-navigation-stack';
import CategoryScreen from '../Screens/CategoryScreen' ;
import CategroyMealScreen from '../Screens/CategroyMealScreen' ;
import MealDetailScreen from '../Screens/MealDetailScreen' ;
import FavouritsScreen from '../Screens/FavouritsScreen' ;
import FiltersScreen from '../Screens/FiltersScreen' ;
import Colors from '../constant/color';
import { Platform } from 'react-native';
import { Icon } from 'native-base';


const DevaultOptions = {
    headerStyle :
        {
         backgroundColor :  Platform.OS === 'android'? Colors.headerColor : ''
         } ,
         headerTintColor :  Platform.OS === 'android' ? 'white' : Colors.headerColor 
     
    
}

const MealsNavigator = createStackNavigator({
    CategoryScreen : {
       screen :  CategoryScreen ,
    },
    CategroyMealScreen : 
    {
        screen : CategroyMealScreen , 
    } ,
    MealDetailScreen : MealDetailScreen
}, {
    defaultNavigationOptions : DevaultOptions
});

const FavNavigator = createStackNavigator({
    Favourites : {
       screen :  FavouritsScreen ,
    },
   
    MealDetailScreen : MealDetailScreen

}, {
    defaultNavigationOptions : DevaultOptions
    
});


const MealTap = createBottomTabNavigator({
    Meals : {
        screen : MealsNavigator , navigationOptions : 
        {
             tabBarIcon : ( (tabInfo) =>{ return (
                <Icon name="food" type = "MaterialCommunityIcons" style={{color: tabInfo.tintColor}} />
               )})
        },
         tabBarColor : Colors.accentColor
    },
    Favourites : {
        screen : FavNavigator , navigationOptions : 
        {
             tabBarIcon : ( (tabInfo) =>{ return (
                <Icon name="picture" type = "AntDesign" style={{color: tabInfo.tintColor}} />
               )}),
               tabBarLabel : 'Pic'
        },
    }, 

    },
     {
    tabBarOptions : 
    {
        activeTintColor : Colors.accentColor , tabStyle : {  backgroundColor : Colors.headerColor}
    }
});
const  filters = createStackNavigator({
    filters : FiltersScreen ,
     
}, {
    defaultNavigationOptions : DevaultOptions
    
}) 

const MainVavigator  = createDrawerNavigator({
    MealsFavs : {
        screen : MealTap , 
        navigationOptions : {
            drawerLabel : 'Meals' , drawerIcon : <Icon name="food" 
            type = "MaterialCommunityIcons" style={{color: Colors.accentColor}} />
        }
    }  , 
    filters : {
        screen : filters ,  
               navigationOptions : {
            drawerLabel : 'Filters' , drawerIcon : <Icon name="ios-star" type = "Ionicons"
             style={{color: Colors.accentColor}} />
        }  
    } ,

});

export default createAppContainer(MainVavigator);