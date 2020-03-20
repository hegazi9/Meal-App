import React , { Component } from 'react' ;
import {View , Text , StyleSheet , StatusBar , ActivityIndicator , ImageBackground , Image} from 'react-native' ;
import Colors from '../constant/color';

class SplashScreen extends Component {
        
  constructor (props)
  {
    super(props);
  }
  
  render() {
    return (
      
      <View style={styles.view}>
     <Image style = {{ width : '100%' , height : '33%'  }}
      source = {{uri : 'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg'}}/>
     <Image style = {{ width : '100%' , height : '33%'  }}
      source = {{uri : 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'}}/>
     <Image style = {{ width : '100%' , height : '34%'  }}
      source = {{uri : 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'}}/>
   </View>

      
              );
  }
}

export default SplashScreen ; 

const styles = StyleSheet.create(
  {
      view :
      {
          flex: 1  , backgroundColor : Colors.headerColor
      } ,
  });
