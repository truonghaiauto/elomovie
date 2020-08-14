import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../styles/Splash.styles';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

function Splash() {
    return (
        <View style={styles.container}>
            <View style={[styles.box]}>
                <View style={[styles.box1]} />
            </View>
            <ImageBackground
                style={styles.banner}
                source={require('../assets/images/splash_1.png')}
            />
            <View style={[styles.box]}>
                <View style={[styles.box1]}>
                    <AnimatedEllipsis
                        numberOfDots={4}
                        animationDelay={150}
                        style={styles.progressbar}
                    />
                </View>

            </View>

        </View>
    )
};

export default Splash;