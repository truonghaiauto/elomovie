import React, {useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import styles from '../views/styles/Splash.styles';

function Splash({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('MainTabScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.banner}
        source={require('../../assets/images/logo_etv.png')}
      />
    </View>
  );
}

export default Splash;
