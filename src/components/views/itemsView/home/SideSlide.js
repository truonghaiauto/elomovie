import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Themes from '../../styles/themes';

const { width, height } = Dimensions.get('window')


const itemsSideSlide = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.avatar }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode={'tail'}>{item.movieName}</Text>
                {/* <Text style={styles.itemDescription}>Tập: {item.id}</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width / 3,
        height: height / 4,
        marginRight: 15,
        marginTop: 15,
    },
    image: {
        width: width / 3,
        height: height / 5,
    },
    itemTitle: {
        color: Themes.colors.black,
        fontSize: 12,
        fontFamily: Themes.boldFont.fontFamily,
        
    },
    itemDescription: {
        color: Themes.colors.black,
        fontSize: 11,
        fontFamily: Themes.regularFont.fontFamily,
    }
})

export default itemsSideSlide;