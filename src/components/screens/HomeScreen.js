import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../views/styles/Home.styles';
import images from '../../assets/images/index';

import Icons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Themes from '../constants/themes';

import data from '../views/data';
import MainSlide from '../views/contacts/homeMainSlide';
import SideSlide from '../views/contacts/homeSideSlide';

function HomeScreen({navigation}) {
  let isActors = true;

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.box1}>
            <Image source={images.userLogo} style={styles.userImage} />
          </View>
          <View style={styles.box2}>
            <Icons
              style={styles.searchIcon}
              name="md-search-sharp"
              color={Themes.colors.red}
              size={26}
            />
          </View>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Main Slide */}
          <View style={styles.mainSlide}>
            <MainSlide data={data} />
          </View>

          {/* Icons */}
          <View style={styles.IconsContainer}>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons
                style={styles.searchIcon}
                name="movie-filter-outline"
                color={Themes.colors.red}
                size={26}
              />
              <Text style={styles.IconTxt}>Films</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialIcons
                style={styles.searchIcon}
                name="ondemand-video"
                color={Themes.colors.red}
                size={26}
              />
              <Text style={styles.IconTxt}>Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons
                style={styles.searchIcon}
                name="baby-face-outline"
                color={Themes.colors.red}
                size={26}
              />
              <Text style={styles.IconTxt}>Catoons</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons
                style={styles.searchIcon}
                name="format-list-bulleted-type"
                color={Themes.colors.red}
                size={26}
              />
              <Text style={styles.IconTxt}>Another</Text>
            </TouchableOpacity>
          </View>

          {/* Hot actors */}
          <View style={styles.sideSlideContainer}>
            <Text style={styles.titleSideSlide}>Hot actors</Text>
            <SideSlide data={data} params={isActors}/>
          </View>

          {/* Newest Film */}
          <View style={styles.sideSlideContainer}>
            <Text style={styles.titleSideSlide}>For you babe...ư!</Text>
            <SideSlide data={data} />
          </View>

          {/* Another films */}
          <View style={styles.sideSlideContainer}>
            <Text style={styles.titleSideSlide}>Newest movies</Text>
            <SideSlide data={data} />
          </View>

          {/* Bla blaaa */}
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
