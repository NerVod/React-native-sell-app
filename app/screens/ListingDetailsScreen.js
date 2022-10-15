import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';

import color from '../config/color';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red Jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: color.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        color: color.black,
        fontSize: 24,
        fontWeight: "500",
    }

})



export default ListingDetailsScreen;