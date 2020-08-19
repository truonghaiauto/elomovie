import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import CarouselItem from '../itemsView/mainSlideItems';

const {width, heigth} = Dimensions.get('window');

function Carousel({data}) {
  let flatList;

  const infiniteScroll = (dataList) => {
    const numberOfData = dataList.length;
    let scrollValue = 0,
      scrolled = 0;

    setInterval(function () {
      scrolled++;
      if (scrolled < numberOfData) scrollValue = scrollValue + width;
      else {
        scrollValue = 0;
        scrolled = 0;
      }

      this.flatList.scrollToOffset({animated: true, offset: scrollValue});
    }, 3000);
  };

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });

  if (data && data.length) {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          ref={(ref) => {
            this.flatList = ref;
          }}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />

      </View>
    );
  }

  console.log('Please provide Images');
  return null;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});

export default Carousel;
