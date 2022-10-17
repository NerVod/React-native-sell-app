import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import colors from '../config/color';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import color from '../config/color';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>            
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color={color.white} size={35} />
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color={color.white} size={35} />
            </View>
            <Image 
            resizeMode='contain' 
            style={styles.image} 
            source={require('../assets/chair.jpg')}
            /> 
                   
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        left: 30,
        position: 'absolute',
        top: 40,
    },
    container: {
        backgroundColor:colors.black,
        flex: 1
    },
    deleteIcon: {
        position: 'absolute',
        right: 30,
        top: 40,
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default ViewImageScreen;