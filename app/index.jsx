import {View,Text,Image, Touchable} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import{LinearGradient} from "expo-linear-gradient"
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeInDown } from 'react-native-reanimated';
import {useRouter} from "expo-router";

export default function Index()
{
    const router = useRouter();
    
    return(
        <View className ="flex-1 flex justify-end">
            <StatusBar style="light"/>
            <Image className="h-full w-full absolute" source={require('../assets/images/image0_0.jpg')} />

            <LinearGradient
        colors={['transparent', '#18181b']}
        style={{width: widthPercentageToDP(100), height: heightPercentageToDP(70)}}
        start={{x: 0.5, y: 0}}
        end= {{x: 0.5, y: 0.6}}
        className="flex justify-end pb-12 space-y-8"
       >
        
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center"> 
            <Text style={{fontSize: heightPercentageToDP(5), color: 'white'}} className=" font-bold tracking-wide ">
                Unleash Your  
                <Text style={{color: '#cafe48'}}>Stronger</Text>
                <Text style={{color: '#cafe48'}}>Self</Text>
               
            </Text>

            </Animated.View>

         <Animated.View entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity
                 onPress={()=>router.push('page1')}
                style={{height: heightPercentageToDP(6), width:widthPercentageToDP(50)}}
                className="bg-white-400 flex items-center justify-center mx-auto rounded-full border-[2.5px] border-neutral-200"
            >
                
                <Text style={{fontSize: heightPercentageToDP(3), color: '#cafe48'}} className="text-white font-bold tracking-widest">
                    Fit Forge !! 
                </Text>
                
            </TouchableOpacity>

            <Text style={{justifyContent:'flex-end' ,fontSize: heightPercentageToDP(1), color: 'white'}} className="font-semibold tracking-widest mx-auto my-5">
            ©2024 FitForge All Rights Reserved | Built by K.V
                </Text>

            {/* <TouchableOpacity
                //  onPress={()=>router.push('page1')}
                style={{height: heightPercentageToDP(10), width:widthPercentageToDP(50)}}
                className="bg-white-400 flex items-center justify-center mx-auto my-1.5 rounded-full border-[2.5px] border-neutral-200"
            >
                
                <Text style={{fontSize: heightPercentageToDP(2.0), color:'#cafe48'}} className="text-white font-semibold tracking-widest">
                    Google SignIn
                </Text>
                
            </TouchableOpacity> */}
        </Animated.View> 
       </LinearGradient>
       
    </View>
    )
}