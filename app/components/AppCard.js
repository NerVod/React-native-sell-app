import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from './AppText';
import color from '../config/color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppCard({ title , subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: color.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle :{
        color: color.secondary,
        fontWeight: "bold"
    },
    title: {
        color: color.black,
        marginBottom: 7
    }
})

export default AppCard;