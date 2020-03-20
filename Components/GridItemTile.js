
import React from 'react';
import {TouchableOpacity , TouchableWithoutFeedback ,  View , Text , StyleSheet, Platform} from 'react-native';

const GridItemTile = props =>
{
    let TouchableOption = TouchableOpacity ;
    if (Platform.OS === 'android' && Platform.Version >= 21 )
    {
        TouchableOption = TouchableWithoutFeedback ;
    }
    return (<View style = {styles.gridItem}>
            <TouchableOption style = {{ flex : 1}} onPress = {props.OnSelect}>
            <View style = {{...styles.container , backgroundColor : props.color}}>
              <Text style = {styles.title}>{props.title}</Text>
              </View>
              </TouchableOption>
              </View>
    );
}

const styles = StyleSheet.create({
    gridItem :
    {
      flex : 1 , margin : 15 , height : 130 , borderRadius : 10 ,   overflow : 'hidden' , elevation : 5 
    },
    container : 
    {
        flex : 1 , padding : 15 , borderRadius : 10 , shadowColor : 'black' , 
        shadowOffset : { width : 0 , height : 2} , shadowRadius : 10  , 
        justifyContent : 'center'  , alignItems : 'center' 
    },
    title : 
    {
        fontSize : 18
    }

  
  });
  
export default GridItemTile;