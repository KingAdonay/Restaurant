import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultShow from './src/screens/ResultShow';
//import ShowPhoto from './src/components/openPictuer';
const navigator=createStackNavigator({
  Search:SearchScreen,
 // ShowPic:ShowPhoto,
  Results:ResultShow,
  
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);