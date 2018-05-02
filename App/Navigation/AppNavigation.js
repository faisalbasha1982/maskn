<<<<<<< HEAD
import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
=======
import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import LaunchScreenNew from '../Containers/LaunchScreenNew';
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
import ScreenTwo from '../Containers/ScreenTwo';
import ScreenThree from '../Containers/ScreenThree';
import ScreenFour from '../Containers/ScreenFour';
import ScreenFive from '../Containers/ScreenFive';

<<<<<<< HEAD
=======

>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ScreenTwo: { screen: ScreenTwo },
  ScreenThree: { screen: ScreenThree },
  ScreenFour: {screen: ScreenFour},
<<<<<<< HEAD
  ScreenFive: {screen: ScreenFive}  
=======
  ScreenFive: {screen: ScreenFive},
  LaunchScreenNew: {screen: LaunchScreenNew},
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
