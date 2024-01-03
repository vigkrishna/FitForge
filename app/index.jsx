import {View,Text,Image} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Index()
{
    return(
        <View className ="flex-1 flex justify-end">
            <StatusBar style="light"/>
            <Image className="h-full w-full absolute" source={require('../assets/images/1.png')} />

        </View>
    )
}