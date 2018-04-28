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
    TouchableOpacity
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
    Body, 
    Right,
    Segment,
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

class ListProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected1: "key1",
        };
      }
    onValueChange(value: string) {
        this.setState({
          selected1: value,
        });
      };
    render() {

        return (
                <Container style={{ backgroundColor: 'white'}}>
                    <Content>                     
                    <Header> 
                    <Left>
                    <Button transparent>
                      <Icon name="arrow-back" />
                    </Button>
                  </Left>
                    </Header>
                    <Body>
                      <Segment>
                        <Button first><Text>Sell</Text></Button>
                        <Button last active><Text>Rent</Text></Button>
                      </Segment>

                      <Form>
                            <Picker
                                renderHeader={backAction =>
                                    <Header style={{ backgroundColor: "#f44242" }}>
                                    <Left>
                                        <Button transparent onPress={backAction}>
                                        <Icon name="arrow-back" style={{ color: "#fff" }} />
                                        </Button>
                                    </Left>
                                    <Body style={{ flex: 3 }}>
                                        <Title style={{ color: "#fff" }}>Your Header</Title>
                                    </Body>
                                    <Right />
                                    </Header>}
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}
                                >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Form>
                        <Form>
                        <Picker
                            renderHeader={backAction =>
                                <Header style={{ backgroundColor: "#f44242" }}>
                                <Left>
                                    <Button transparent onPress={backAction}>
                                    <Icon name="arrow-back" style={{ color: "#fff" }} />
                                    </Button>
                                </Left>
                                <Body style={{ flex: 3 }}>
                                    <Title style={{ color: "#fff" }}>Your Header</Title>
                                </Body>
                                <Right />
                                </Header>}
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </Form>
                    <Form>
                    <Picker
                        renderHeader={backAction =>
                            <Header style={{ backgroundColor: "#f44242" }}>
                            <Left>
                                <Button transparent onPress={backAction}>
                                <Icon name="arrow-back" style={{ color: "#fff" }} />
                                </Button>
                            </Left>
                            <Body style={{ flex: 3 }}>
                                <Title style={{ color: "#fff" }}>Your Header</Title>
                            </Body>
                            <Right />
                            </Header>}
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: undefined }}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Picker.Item label="Wallet" value="key0" />
                        <Picker.Item label="ATM Card" value="key1" />
                        <Picker.Item label="Debit Card" value="key2" />
                        <Picker.Item label="Credit Card" value="key3" />
                        <Picker.Item label="Net Banking" value="key4" />
                    </Picker>
                    </Form>
                    </Body>
             
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

    mlogo:{
        flex: 2,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',        
        marginTop: 60,

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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFive);