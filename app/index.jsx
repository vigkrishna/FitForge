import {View,Text,Image, Touchable} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import{LinearGradient} from "expo-linear-gradient"
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Index()
{
    return(
        <View className ="flex-1 flex justify-end">
            <StatusBar style="light"/>
            <Image className="h-full w-full absolute" source={require('../assets/images/1.png')} />

            <LinearGradient
        colors={['transparent', '#18181b']}
        style={{width: widthPercentageToDP(100), height: heightPercentageToDP(70)}}
        start={{x: 0.5, y: 0}}
        end= {{x: 0.5, y: 0.8}}
        className="flex justify-end pb-12 space-y-8"
       >
       
        <View className="flex items-center"> 
            <Text style={{fontSize: heightPercentageToDP(5)}} className="text-white font-bold tracking-wide">
                Best <Text className="text-rose-500">Workouts</Text>
            </Text>

            <Text style={{fontSize: heightPercentageToDP(5)}} className="text-white font-bold tracking-wide">
                For You
            </Text>
         </View> 

         <View>
         <TouchableOpacity
              
                style={{height: heightPercentageToDP(7), width: widthPercentageToDP(80)}}
                className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[0.5px] border-neutral-200"
            >
                <Text style={{fontSize: heightPercentageToDP(3)}} className="text-white font-bold tracking-widest">
                    Get Started
                </Text>
            </TouchableOpacity>
         </View>

        {/* <Animated.View entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity
                onPress={()=> router.push('home')}
                style={{height: hp(7), width: wp(80)}}
                className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
            >
                <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">
                    Get Started
                </Text>
            </TouchableOpacity>
        </Animated.View> */}
       </LinearGradient>
       
    </View>
    )
}