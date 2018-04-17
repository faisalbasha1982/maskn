import EStyleSheet from "react-native-extended-stylesheet";
import { Metrics, ApplicationStyles } from '../../Themes/'

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },

  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    overflow: 'hidden'
  },
  topContainer: {
    flex: 3
  },

})
