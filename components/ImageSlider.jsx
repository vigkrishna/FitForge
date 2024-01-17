import { View, Text } from 'react-native'
import React from 'react'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
const sliderImages = [
  require('../assets/images/a.png'),
  require('../assets/images/b.png'),
  require('../assets/images/c.png'),
  require('../assets/images/d.png'),
  require('../assets/images/12.png'),
]

export default function ImageSlider() {
  return (
    <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        autoplayInterval={6500}
        itemWidth={wp(100)-70}
        slideStyle={{display: 'flex', alignItems: 'center'}}
    />

  )
}

const ItemCard = ({item,index}, parallaxProps)=>{
    return (
       
           <View style = {{width:widthPercentageToDP(100)-70, height: heightPercentageToDP(25)}}>
            <ParallaxImage
            source={item}
            containerStyle={{borderRadius:20,flex:1}}
            style={{resizeMode:'contain'}}
            parallaxFactor={1}
            {...parallaxProps}
            />
           </View>
        
    )
}