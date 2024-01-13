import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider'
import BodyParts from '../components/BodyParts'

export default function Comppage1() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
    <StatusBar style="dark" />

    
    <View className="flex-row justify-between items-center mx-5">
      <View className="space-y-2">
          <Text
              style={{fontSize: heightPercentageToDP(4.5)}}
              className="font-bold tracking-wider text-neutral-700"
          >
              READY TO
          </Text>
          <Text
              style={{fontSize: heightPercentageToDP(4.5)}}
              className="font-bold tracking-wider text-rose-500"
          >
              WORKOUT
          </Text>
      </View>
      
      <View className="flex justify-center items-center space-y-2">
        <Image
        source={require('../assets/images/10.png')}
        style={{height: heightPercentageToDP(10), width:heightPercentageToDP(10)}}
        className="rounded-full"
        />

         <View  className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                style={{height: heightPercentageToDP(5.5), width: heightPercentageToDP(5.5)}}
            >
                <Ionicons name="notifications" size={heightPercentageToDP(3)} color="gray" />
         </View>

   </View>
      </View>

      <View>
        <ImageSlider/>
        {/* <BodyParts/> */}
      </View>

      <View className="flex-1">
        <BodyParts/>
      </View>

      </SafeAreaView>
  )
}