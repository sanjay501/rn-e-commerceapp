import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Left, Body, Title, Right, ListItem, CheckBox } from 'native-base';
import SignUpModal from './signup'

class Login extends Component {
    constructor(props) {
        super(props);
        this.setModalVisible = this.setModalVisible.bind(this);

        this.state = {
            modalVisible: false

        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
        //console.log(false);
    }

    render() {
        return (
            <Container>
                <View style={{ marginTop: 22 }}>
                    <Modal

                        animationType='slide'
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <SignUpModal setModalState={this.setModalVisible} />



                    </Modal>


                </View>

                <Content style={styles.container}>
                    <View style={styles.image}>
                        <Icon name='contact' style={{ fontSize: 100, color: 'white' }} />
                        <Text style={{ paddingVertical: 10, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign In</Text>
                        <Text style={{ color: 'white' }}>...for more ways to save</Text>
                        <Text style={{ color: 'white' }}>time and money</Text>

                    </View>
                    <View style={styles.form}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                        <View style={{ padding: 10 }}>
                            <Button block style={{ backgroundColor: '#694fad' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign In</Text>
                            </Button>
                        </View>
                        <View style={{ paddingTop: 20, paddingLeft: 5 }}>
                            <Text style={{ textDecorationLine: 'underline' }}>Forgot Password?</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, paddingLeft: 5 }}>
                            <View >
                                <Text>New to App?    </Text>

                            </View>
                            <View >
                                <Text onPress={() => this.setModalVisible(true)} style={{ textDecorationLine: 'underline' }}> Create an Account </Text>

                            </View>
                        </View>

                    </View>



                </Content>
            </Container>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        backgroundColor: "#694fad",
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 1
    },
    signupform: {
        display: 'flex',
        flexDirection: 'column'
    }
});


export default Login;