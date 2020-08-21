import React from 'react';
import {View, FlatList, Animated} from 'react-native';
import SideSlide from '../../itemsView/home/SideSlide';

function homeSideSlide({data}) {
  const scrollX = new Animated.Value(0);
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key: ' + index}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <SideSlide item={item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    );
  }

  return null;
}

export default homeSideSlide;
