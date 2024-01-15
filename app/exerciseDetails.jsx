import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();
  return (
    <View className="flex flex-1 bg-black">
        <View className="shadow-md bg-white rounded-b-[40px]">
             <Image  
                source={{uri: item.gifUrl}}
                contentFit='cover'
                style={{width:wp(100), height: wp(100) }}
                className="rounded-b-[40px]"
            />
        </View> 

        <TouchableOpacity 
            onPress={()=> router.back()}
            className="mx-2  absolute rounded-full my-12 right-0 bg-black"
        >
            <Anticons name="closecircle" size={hp(4.5)} color="#cafe48" />
        </TouchableOpacity>

        {/* details */}

        <ScrollView className="mx-4 space-y-2 mt-3 " showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}}>
            <Animated.Text
                entering={FadeInDown.duration(300).springify()}
                style={{fontSize: hp(3.5),color:'#cafe48'}}
                className="font-bold text-neutral-800 tracking-wide"
            >
                {item.name}
            </Animated.Text>
            <Animated.Text
                entering={FadeInDown.delay(100).duration(300).springify()}
                style={{fontSize: hp(2), color:'#cafe48'}}
                className=" text-neutral-700 tracking-wide"
            >
                Equipment <Text className="font-bold text-neutral-800 color-white">
                    {item?.equipment}
                </Text>
            </Animated.Text>
            <Animated.Text
                entering={FadeInDown.delay(200).duration(300).springify()}
                style={{fontSize: hp(2), color:'#cafe48'}}
                className=" text-neutral-700 tracking-wide"
            >
                Secondary Muscles <Text className="font-bold text-neutral-800 color-white">
                    {item?.secondaryMuscles}
                </Text>
            </Animated.Text>
            <Animated.Text
                entering={FadeInDown.delay(300).duration(300).springify()}
                style={{fontSize: hp(2), color:'#cafe48'}}
                className=" text-neutral-700 tracking-wide"
            >
                Target <Text className="font-bold text-neutral-800 color-white">
                    {item?.target}
                </Text>
            </Animated.Text>

            <Animated.Text
                entering={FadeInDown.delay(400).duration(300).springify()}
                style={{fontSize: hp(3), color:'#cafe48'}}
                className="font-semibold text-neutral-800 tracking-wide"
            >
                Instructions
            </Animated.Text>

            {
                item.instructions?.split(',').map((instruction, index)=>{
                    return (
                        <Animated.Text
                            entering={FadeInDown.delay((index+5)*100).duration(300).springify()}
                            key={instruction}
                            style={{fontSize: hp(1.7), color:'white'}}
                            className="text-neutral-800"
                        >
                            {instruction}
                        </Animated.Text>
                    )
                })
            }
        </ScrollView>
      
    </View>
  )
}