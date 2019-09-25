
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground
} from 'react-native';
import { Button } from 'native-base';
import Carousel from 'react-native-anchor-carousel';
import loadingBlurImage from './loading-blur.png';

const { width } = Dimensions.get('window');

const data = [
    {
        uri: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
        title: 'Lorem ipsum dolor sit amet',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    },
    {
        uri: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum '
    },
    {
        uri: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
    },
    {
        uri: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
    },
    {
        uri: 'https://i.imgur.com/WmenvXr.jpg',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor '
    }
];

export default class ImageCarousel extends Component {
    renderItem = ({ item, index }) => {
        const { uri, title, content } = item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index);
                }}
            >
                <ImageBackground
                    source={{ uri: uri }}
                    style={styles.imageBackground}
                    loadingIndicatorSource={loadingBlurImage}
                >
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.rightText}>Lorem</Text>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View >
                            <Text style={styles.titleText}>{title}</Text>
                        </View>
                        <View >
                            <Text style={styles.contentText}>{content}</Text>
                        </View>
                        <Button bordered onPress={() => { this.props.navigation.navigate("Details") }}>
                            <Text style={{ color: 'white' }}>Navigate me to Details</Text>
                        </Button>
                    </View>
                </ImageBackground>

            </TouchableOpacity>
        );
    };

    render() {
        return (
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={this.renderItem}
                itemWidth={0.9 * width}
                inActiveOpacity={0.3}
                containerWidth={width - 10}
                ref={(c) => {
                    this.numberCarousel = c;
                }}
                pagingEnable={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'white',
        height: 400
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
        borderWidth: 5,
        borderColor: 'white'
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    rightText: { color: 'white' },
    lowerContainer: {
        flex: 1,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'white',
        width: '100%'


    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    contentText: {
        marginTop: 10,
        fontSize: 12,
        color: 'white'
    }
});