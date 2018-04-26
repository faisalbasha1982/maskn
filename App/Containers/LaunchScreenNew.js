// See ./example folder for details
import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react';
import {
    Platform,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {
    Container,
    Header,
    Left,
    Content,
    Thumbnail,
    Tab,
    Tabs,
    TabHeading,
    Icon,
    Input,
    Item,
    Button,
    Drawer,
} from 'native-base';

import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';

import LinkedInModal from 'react-native-linkedin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class LaunchScreenNew extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinkedInModal
          clientID="81td97f0ibm93v"
          clientSecret="RotJQJQRBbBoWG7l"
          redirectUri="https://www.linkedin.com/developer/apps"
          onSuccess={token => console.log(token)}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
    return {
        //fetching: LoginSelectors.getFetching(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {

        resetNavigate: navigationObject => dispatch(NavigationActions.reset(navigationObject)),
        navigate: navigationObject => dispatch(NavigationActions.navigate(navigationObject)),
        navigateBack: () => dispatch(NavigationActions.back()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreenNew);