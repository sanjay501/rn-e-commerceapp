import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content } from 'native-base';
import ImageCarousel from "../../components/ImageCarousel";

class HomeScreen extends Component {

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#694fad' }}>
                    <Left>

                    </Left>
                    <Body>
                        <View style={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Icon name="construct" />
                            <Title>E-Commerce App</Title>
                        </View>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <ImageCarousel navigation={this.props.navigation} />
                </Content>

            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;