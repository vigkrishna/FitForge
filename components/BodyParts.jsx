import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';



const bodyParts = [
  {
    name: 'waist',
    image: require('../assets/images/2.png'),
  },
  {
    name: 'upper legs',
    image: require('../assets/images/3.png'),
  },
  
  {
    name: 'upper arms',
    image: require('../assets/images/4.png'),
  },
  {
    name: 'shoulders',
    image: require('../assets/images/10.png'),
  },
  {
    name: 'neck',
    image: require('../assets/images/11.png'),
  },
  {
    name: 'lower legs',
    image: require('../assets/images/12.png'),
  },
  {
    name: 'lower arms',
    image: require('../assets/images/13.png'),
  },
  {
    name: 'chest',
    image: require('../assets/images/14.png'),
  },
  {
    name: 'cardio',
    image: require('../assets/images/15.png'),
  },
  {
    name: 'back',
    image: require('../assets/images/16.png'),
  }
]
export default function BodyParts() {
    const router = useRouter();
  return (
    <View className="mx-4 ">
      <Text style={{fontSize: hp(3), color:'#cafe48'}} className="font-bold text-neutral-700">
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item=> item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
            justifyContent: 'space-between'
        }}
        renderItem={({item, index})=> <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const BodyPartCard = ({item, router, index})=>{
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={()=> router.push({pathname: '/page2', params: item})}
                style={{width: wp(44), height: wp(52)}}
                className="flex justify-end p-4 mb-4">
                    <Image 
                        source={item.image}
                        resizeMode='cover'
                        style={{width: wp(44), height: wp(52)}}
                        className="rounded-[35px] absolute"
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.9)']}
                        style={{width: wp(44), height: hp(15)}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1}}
                        className="absolute bottom-0 rounded-b-[35px]"
                    />

                    <Text
                        style={{fontSize: hp(2.1)}}
                        className="text-white font-bold text-center tracking-wide"
                    >
                        {item?.name}
                    </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

