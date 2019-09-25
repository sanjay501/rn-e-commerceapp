import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Modal } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Left, Body, Title, Right, ListItem, CheckBox } from 'native-base';
import ProgressLoader from 'rn-progress-loader';

class SignUpModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            checkbox: true,
            progressbar: false
        };
    }





    toggle = () => {
        console.log("toggle");
        this.setState({ checkbox: !this.state.checkbox });

    }

    _onSignup = async () => {
        this.setState({ progressbar: true }, () => {
            var { firstname, lastname, email, password } = this.state;

            let formData = new FormData();
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('email', email);
            formData.append('password', password);
            fetch("http://dmis.club/dmis_app/images/register.php", {
                method: 'POST',
                body: formData
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.response == "true") {
                        console.log(responseJson);
                        this.setState({ progressbar: false }, () => {
                            this.props.setModalState(false);

                        })

                    } else {
                        Alert("Signup failed")
                        this.componentWillUnmount();
                    }
                })

        })

    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#694fad' }}>
                    <Left>
                        <Icon name="arrow-round-back" onPress={() => this.props.setModalState(false)} />

                    </Left>
                    <Body>
                        <Title>
                            Sign up
                                    </Title>

                    </Body>
                    <Right />


                </Header>
                <Content padder>
                    <View style={styles.signupform}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Label >* required Fields</Label>
                        </View>

                        <Item floatingLabel style={styles.signupform}>
                            <Label>First Name *</Label>
                            <Input onChangeText={(firstname) => this.setState({ firstname })} />
                        </Item>
                        <Item floatingLabel style={styles.signupform}>
                            <Label>Last Name</Label>
                            <Input onChangeText={(lastname) => this.setState({ lastname })} />
                        </Item>
                        <Item floatingLabel style={styles.signupform}>
                            <Label>Email</Label>
                            <Input onChangeText={(email) => this.setState({ email })} />
                        </Item>
                        <Item floatingLabel style={styles.signupform}>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                        </Item>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 25, paddingHorizontal: 5 }}>
                            <View  >
                                <CheckBox checked={this.state.checkbox} onPress={this.toggle.bind(this)} />
                            </View>

                            <View style={{ paddingLeft: 20 }}>
                                <Text>Email me about Rollbacks, special pricing, hot new items, gift ideas and more.</Text>
                            </View>
                        </View>
                        <View style={{ paddingVertical: 20, paddingHorizontal: 5 }}>
                            <Text>By Clicking Create Account, you acknowledge you have read
                                             and agreed to our <Text style={{ textDecorationLine: 'underline' }}>Terms of use</Text> and <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>
                            </Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', alignContent: 'center', padding: 10 }}>
                            <Button rounded style={{ padding: 10 }} onPress={this._onSignup.bind(this)}>
                                <Text style={{ fontSize: 20, fontWeight: '300', color: 'white', alignContent: 'center', margin: 3 }}>Create Account</Text>
                            </Button>
                        </View>

                    </View>
                    <View
                        style={{ backgroundColor: "#06566e", justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                        <ProgressLoader
                            visible={this.state.progressbar}
                            isModal={true} isHUD={true}
                            hudColor={"#000000"}
                            color={"#FFFFFF"} />
                    </View>




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
    signupform: {
        marginVertical: 5,
        paddingVertical: 5
    }
});

export default SignUpModal;


