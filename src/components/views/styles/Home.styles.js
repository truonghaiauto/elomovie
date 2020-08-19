import {StyleSheet, Dimensions} from 'react-native';
import Themes from '../../constants/themes';

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Themes.colors.white,
    paddingBottom: 30,
  },

  //Header styles
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: Themes.colors.white,
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: Themes.colors.gray,
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  userImage: {
    width: '80%',
    height: '85%',
    borderRadius: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    marginLeft: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 7,
    width: '100%',
    alignItems: 'flex-end',
    right: 15,
  },

  //   Body Styles
  body: {
    flex: 8,
    width: '100%',
    height: '100%',
  },
  mainSlide: {
    width: '100%',
  },
  IconsContainer: {
    width: width - 30,
    height: 50,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  IconBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconTxt: {
    fontFamily: Themes.regularFont.fontFamily,
    fontSize: 12,
  },

  //Actors slide 


  //Films slide
  sideSlideContainer: {
    width: width,
    alignSelf: 'baseline',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: 20,
    left: 15,
    paddingRight: 15,
  },
  titleSideSlide: {
    fontFamily: Themes.boldFont.fontFamily,
    fontSize: 18,
  },
});

export default styles;
