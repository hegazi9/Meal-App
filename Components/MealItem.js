
import React from 'react';
import {TouchableOpacity  ,  View , Text , StyleSheet , ImageBackground} from 'react-native';

const MealItem = props =>
{
    return (
            <View style = {styles.mealItem}>
              <TouchableOpacity onPress = {props.OnSelectMeal}>
                <View>
                  <View style = {{...styles.mealRow , ...styles.mealHeader}}>
                    <ImageBackground style = {styles.bgImge} source = {{uri : props.imageUrl}}>
                    <Text style = {styles.title} numberOfLines = {1}>{props.title}</Text>
                    </ImageBackground>
                    </View>
                  <View style = {{...styles.mealRow , ...styles.mealDetails}}>
                  <Text>{props.duration}m</Text>
                  <Text>{props.complexity.toUpperCase()}</Text>
                  <Text>{props.affordability.toUpperCase()}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
    );
}

const styles = StyleSheet.create({
    mealItem :
    {
      width : '100%' , height : 200 , backgroundColor : '#f5f5f5' , borderRadius : 10  , 
      overflow : 'hidden' , marginTop : '1%' , marginVertical : 10
    },
    bgImge : 
    {
      width : '100%' , height : '100%' , justifyContent : 'flex-end' 
    },
    mealRow : 
    {
      flexDirection : 'row'
    },
    mealHeader :
    {
      height : '85%'
    },
    mealDetails : 
    {
      paddingHorizontal : 10 , justifyContent : 'space-between' , alignItems : 'center' , height : '15%'
    },
    title: 
    {
      fontSize : 20 , paddingVertical : 5 , color : 'white' , backgroundColor : 'rgba(0,0,0,0.5)',
      paddingHorizontal : 12 , textAlign : 'center'
    }
    
    });
    
  export default MealItem;