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
    TouchableOpacity,
    ImageBackground,
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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class ScreenFour extends Component {

    render() {

        return (
            <Container style={{ backgroundColor: 'white' }}>
                <Content>
                    <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <TouchableOpacity onPress = { () => { this.props.navigateBack() } } style={{marginLeft: 25, marginTop: 25, }}>
                            <Image source={require('../Images/barrow.png')} style={{ marginLeft: 20, marginTop: 20, width: 15, height: 24, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                            <Image source={ require('../Images/mlogobig.png')} style={{ width: 180, height: 55, resizeMode: 'contain'}} />
                    </View>
                    <View style={styles.mlogo}>
                        <Thumbnail large source={require('../Images/mlogo.png')} />
                    </View>

                    <View style={{ flex: 1, marginTop: 80, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ color: 'grey' }}> OTP Verification </Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginTop: 5 }}>
                        <View style={{ width: "10%", height: 50, }}>
                                <Item style={{ height: 25 }}>
                                    <Input placeholder='' />
                                </Item>
                        </View>
                        <View style={{ width: "10%", height: 50, marginLeft: 10, }}>
                                <Item style={{ height: 25 }}>
                                   <Input placeholder='' />
                                </Item>
                        </View>

                        <View style={{ width: "10%", height: 50, marginLeft: 10,}}>
                                <Item style={{ height: 25 }}>
                                    <Input placeholder='' />
                                </Item>
                        </View>
                        <View style={{ width: "10%", height: 50, marginLeft: 10, }}>
                                <Item style={{ height: 25 }}>
                                    <Input placeholder='' />
                                </Item>
                        </View>
                    </View>


                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 45,
                        marginLeft: 75
                    }}>
                        <View style={{ width: 250, height: 50, }}>
                            <Button style={{ width: 170, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff8d0d' }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Done !</Text></Button>
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
        marginBottom: 25

    },

    mlogo: {
        flex: 2,
        height: 70,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 45,
        padding: 10

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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFour);