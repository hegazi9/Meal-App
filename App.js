
import React , { Component }from 'react';
import MealsNavigator from './Navigation/MealNavigator';
import { useScreens } from 'react-native-screens' ;
import SplashScreen from './Screens/SplashScreen'
import { View } from 'react-native';

//useScreens();

export default class App extends Component {
  constructor(){
 
    super();
 
    this.state={
 
      isVisible : true,
 
    }
 
  }
 
  Hide_Splash_Screen=()=>{
 
    this.setState({ 
      isVisible : false 
 
    });
 
  }
 
  componentDidMount(){
 
    var that = this;
 
    setTimeout(function(){
 
      that.Hide_Splash_Screen();
 
    }, 4000);
 
 
  
  }
  render() {
    if (this.state.isVisible === true) {
      return  <SplashScreen/>
    }
    else  (this.state.isVisible === true) 
    {
      return  <MealsNavigator/>
    }     
   }
  
         
    }

    /*
    
    adb shell input keyevent 82
/*  adb -s <58KRX19109005789> reverse tcp:8081 tcp:8081
Resolve Error --->  $ react-native bundle --platform android --dev false --entry-file index.js
 --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
$ cd (path to project/android folder) && gradlew clean && cd .. && react-native run-android
$
*/


 
