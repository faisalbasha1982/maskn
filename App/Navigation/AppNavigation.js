import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import LaunchScreenNew from '../Containers/LaunchScreenNew';
import ScreenTwo from '../Containers/ScreenTwo';
import ScreenThree from '../Containers/ScreenThree';
import ScreenFour from '../Containers/ScreenFour';
import ScreenFive from '../Containers/ScreenFive';


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ScreenTwo: { screen: ScreenTwo },
  ScreenThree: { screen: ScreenThree },
  ScreenFour: {screen: ScreenFour},
  ScreenFive: {screen: ScreenFive},
  LaunchScreenNew: {screen: LaunchScreenNew},
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
