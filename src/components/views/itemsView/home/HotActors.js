import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Themes from '../../styles/themes';
const { width, height } = Dimensions.get('window')


const itemsSideSlide = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.avatar }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode={'tail'}>{item.idfilm}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width / 5,
        height: height / 7,
        marginRight: 15,
        marginTop: 15,
        borderRadius: height ,
        paddingBottom: 15,
        alignItems: 'center'
    },
    image: {
        width: width / 5,
        height: height / 9,
        borderRadius: height ,
    },
    itemTitle: {
        color: Themes.colors.black,
        fontSize: 12,
        fontFamily: Themes.regularFont.fontFamily,
        
    },
})

export default itemsSideSlide;