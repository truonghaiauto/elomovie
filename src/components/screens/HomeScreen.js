import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from '../views/styles/Home.styles';
import images from '../../assets/images/index';

import Icons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Themes from '../views/styles/themes';

import dataTest from '../contacts/data/data';
import myServices from '../contacts/data/services';

import MainSlide from '../views/slides/home/MainSlide';
import HotActors from '../views/slides/home/HotActors';
import SideSlide from '../views/slides/home/SideSlide';

function HomeScreen({navigation}) {
  const [isLoading, setLoading] = useState(false);
  const [newestMoviesList, setNewestMovies] = useState([]);

  useEffect(() => {
    myServices.getNewestMovies(data => {
      setNewestMovies(data);
    })
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

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
            <MainSlide data={dataTest} />
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
              <Text style={styles.IconTxt}>Chiếu rạp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconBox}>
              <MaterialIcons
                style={styles.searchIcon}
                name="ondemand-video"
                color={Themes.colors.red}
                size={26}
              />
              <Text style={styles.IconTxt}>Trailer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons
                style={styles.searchIcon}
                name="baby-face-outline"
                color={Themes.colors.red}
                size={26}
              />
              <Text style={styles.IconTxt}>Hoạt hình</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <MaterialCommunityIcons
                style={styles.searchIcon}
                name="format-list-bulleted-type"
                color={Themes.colors.red}
                size={26}
              />
              <Text style={styles.IconTxt}>Thể loại</Text>
            </TouchableOpacity>
          </View>

          {/* Hot actors */}
          <View style={styles.sideSlideContainer}>
            <Text style={styles.titleSideSlide}>Diễn viên nổi bật</Text>
            <HotActors data={dataTest} />
          </View>

          {/* Recommended Film */}
          <View style={styles.sideSlideContainer}>
            <Text style={styles.titleSideSlide}>Phim đề cử</Text>
            <SideSlide data={dataTest} />
          </View>

          {/* Newest Film */}
          <View style={styles.sideSlideContainer}>
            <Text style={styles.titleSideSlide}>Phim mới nhất</Text>
            <SideSlide data={newestMoviesList} />
          </View>

          {/* Bla blaaa */}
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
