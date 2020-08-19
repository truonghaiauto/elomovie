import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Animated,
} from 'react-native';
import AnotherViews from '../itemsView/sideSlideItems';
import ActorItems from '../itemsView/hotActorsItems'; 

function FlatListSideSlide({data, params}) {
  var abc = params;
  console.log(abc);

  const scrollX = new Animated.Value(0);
  if(params === true){
    if (data && data.length) {
      return (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            scrollEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <ActorItems item={item} />;
            }}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}},
            ])}
          />
        </View>
      );
    }
    
    return null;

  }else{

    if (data && data.length) {
      return (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            scrollEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <AnotherViews item={item} />;
            }}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}},
            ])}
          />
        </View>
      );
    }

    return null;
  }
  
}

export default FlatListSideSlide;
