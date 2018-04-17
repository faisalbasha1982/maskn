/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
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

const ViewPortwidth  = Dimensions.get('window').width;
const ViewPortheight = Dimensions.get('window').height; 

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class LaunchScreen extends Component {

    responsiveWidth = (width) => {
       return ((width / ViewPortwidth) * 100) + "%";
    }

    responsiveHeight = (height) => {
        return ((height / ViewPortheight) * 100) + "%";
    }

    render() {

        return (
            <Container style={{ backgroundColor: 'white' }}>
                <Content>
                    <View style={{ backgroundColor: 'white', flex: 1 }}>
                        <TouchableOpacity style={{marginLeft: 20, marginTop: 20, }}>
                            <Image source={require('../Images/barrow.png')} style={{ marginLeft: 20, marginTop: 20, width: 15, height: 24, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <Image source={require('../Images/mlogobig.png')} style={{ width: 180, height: 55, resizeMode: 'contain' }} />
                    </View>
                    <View style={styles.mlogo}>
                        <Image source={require('../Images/logo2.png')} style={{ width: 120, height: 49, resizeMode: 'contain' }} />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginTop: 70 }}>
                        <View style={{ width: 50, height: 50, }}>
                        <TouchableOpacity onPress={ () => {this.props.navigate({routeName: 'ScreenFour'})} }>
                            <Image source={require('../Images/gbtn.png')} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
                         </TouchableOpacity>
                        </View>

                        <View style={{ width: 50, height: 50, marginLeft: 10, }}>
                        <TouchableOpacity onPress={ () => {this.props.navigate({routeName: 'ScreenFive'})} }>
                            <Image source={require('../Images/fbtn.png')} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        </View>
                        <View style={{ width: 50, height: 50, marginLeft: 10, }} >
                            <Image source={require('../Images/tbtn.png')} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
                        </View>
                    </View>

                    <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ color: 'grey' }}> OR </Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 25,
                        marginLeft: 75
                    }}>
                        <View style={{ width: 250, height: 50, }}>
                            <Button onPress={() => { this.props.navigate({ routeName: 'ScreenTwo' }) }} style={{ width: 170, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff8d0d' }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Signin</Text></Button>
                        </View>
                        <View style={{ width: 250, height: 50, }}>
                            <Button onPress={() => { this.props.navigate({ routeName: 'ScreenThree' }) }} style={{ width: 170, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#818287' }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Signup</Text></Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    logo: {
        flex: 2,
        height: 70,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,

    },

    mlogo: {
        flex: 2,
        height: 70,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,

    }



});

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

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);